
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/About" | "/Blogs" | "/Pictures" | "/Projects" | "/QNA" | "/Updates";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/About": Record<string, never>;
			"/Blogs": Record<string, never>;
			"/Pictures": Record<string, never>;
			"/Projects": Record<string, never>;
			"/QNA": Record<string, never>;
			"/Updates": Record<string, never>
		};
		Pathname(): "/" | "/About" | "/Pictures" | "/Projects" | "/QNA" | "/Updates";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}