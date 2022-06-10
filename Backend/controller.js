const asyncHandler = require('express-async-handler')

const Models = require('./model')
const Blog = Models.Blogs
const Suggestions = Models.Suggestions
const Fhilts = Models.Fhilts

const getData = asyncHandler(async(req, res) => {
    let result;
    switch(req.baseUrl){
        case '/api/v1/blogs':
            result = await Blog.find().sort({entry: -1})
            break;
        case '/api/v1/suggestions':
            result = await Suggestions.find()
            break;
        case '/api/v1/fhilts':
            result = await Fhilts.find().sort({rank: -1})
    }
    res.status(200).json(result)
})

const postData = asyncHandler(async(req, res) => {
    let result;
    switch(req.baseUrl){
        case '/api/v1/blogs':
            const newestBlog = await Blog.find().sort({entry: -1}).limit(1)

            if(!req.body.date){
                res.status(400)
                throw new Error('There is no date presented.')
            }else if(!req.body.message){
                res.status(400)
                throw new Error('There is no message presented.')
            }
            result = await Blog.create({
                entry: (newestBlog[0]?.entry ?? 0)+1,
                date: req.body.date,
                message: req.body.message
            });
            res.status(200).json(result)
            break;
        case '/api/v1/suggestions':
            if(!req.body.message){
                res.status(400)
                throw new Error("There is no message.")
            }
            result = await Suggestions.create({
                message: req.body.message,
                checked: false
            })
            res.status(200).json(result)
            break;
        case '/api/v1/fhilts':
            if(!req.body.rank){
                res.status(400)
                throw new Error("This fhilt is not ranked.")
            }else if(!req.body.imgLink){
                res.status(400)
                throw new Error("The fhilt requires an image link.")
            }
            let fhilts = await Fhilts.find({"rank": req.body.rank});
            const updatedFhilts = []
            let updated;
            if(fhilts.length){
                fhilts = await Fhilts.find({"rank": { $gt: req.body.rank-1 }}).sort({rank: 1})
                for(let i = 0; i < fhilts.length; i++){
                    updated = await Fhilts.findByIdAndUpdate({"_id": fhilts[i].id}, {"rank": i+1+req.body.rank})
                    updatedFhilts.push(updated)
                }
            }
            result = await Fhilts.create({
                imgLink: req.body.imgLink,
                rank: req.body.rank
            })
            res.status(200).json(result)
    }
})

const putData = asyncHandler(async(req, res) => {
    switch(req.baseUrl){
        case '/api/v1/blogs':
            const blog = await Blog.find({"entry": parseInt(req.params.id)})

            if(blog.length == 0){
                res.status(400)
                throw new Error('Blog entry not found')
            }

            const updatedBlog = await Blog.findOneAndUpdate({"entry": req.params.id}, req.body)

            res.status(200).json(updatedBlog)
            break;
        case '/api/v1/suggestions':
            const suggest = await Suggestions.find({"checked": false})

            if(suggest.length == 0){
                res.status(400)
                throw new Error('Suggestions all checked')
            }

            const updatedSuggest = await Suggestions.updateMany({"checked": false},req.body)

            res.status(200).json(updatedSuggest)
            break;
        case '/api/v1/fhilts':
            if(req.params.id === "del"){
                const fhilts = await Fhilts.find().sort({rank: 1})
                let updatedFhilts = []
                let updatedFhilt;
                for(let i = 0; i < fhilts.length; i++){
                    updatedFhilt = await Fhilts.findByIdAndUpdate({"_id": fhilts[i].id}, {"rank": i+1})
                    updatedFhilts.push(updatedFhilt)
                }
                res.status(200).json(updatedFhilts)
            }
    }
})

const delData = asyncHandler(async(req, res) => {
    switch(req.baseUrl){
        case '/api/v1/blogs':
            const blog = await Blog.find({"entry": parseInt(req.params.id)})

            if(blog.length == 0){
                res.status(400)
                throw new Error('Not found in database')
            }

            const updatedBlog = await Blog.findOneAndDelete({"entry": req.params.id});

            res.status(200).json({
                "deletedID": updatedBlog.entry,
                "deletedDate": updatedBlog.date,
                "deletedValue": updatedBlog.message,
                "hasBeenDeleted?": true
            })
            break;
        case '/api/v1/suggestions':
            const suggest = await Suggestions.find()

            if(suggest.length == 0){
                res.status(400)
                throw new Error('Not found in database')
            }

            const updatedSuggest = await Suggestions.deleteMany({"checked": true});

            res.status(200).json({
                "deletedMessage": updatedSuggest.message,
                "hasBeenDeleted?": true
            })
            break;
        case '/api/v1/fhilts':
            const fhilts = await Fhilts.find({"rank": req.params.id})
            if(fhilts.length == 0){
                res.status(400)
                throw new Error('There is no flameshot with that rank.')
            }
            const updatedFhilt = await Fhilts.findOneAndDelete({"rank": req.params.id})
            res.status(200).json({
                "deletedHilt": updatedFhilt.imgLink,
                "deletedRank": updatedFhilt.rank,
                "hasBeenDeleted?": true
            })
    }
    
})

module.exports = {
    getData,
    postData,
    putData,
    delData,
}