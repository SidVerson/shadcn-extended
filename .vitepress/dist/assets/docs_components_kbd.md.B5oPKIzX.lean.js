import{a6 as t,J as l,l as n,x as p,y as c,i as k,K as s,F as o,al as e,e as y}from"./chunks/framework.DQPMma1w.js";const z=JSON.parse('{"title":"Kbd","description":"Display a keyboard key in a text block.","frontmatter":{"title":"Kbd","description":"Display a keyboard key in a text block."},"headers":[],"relativePath":"docs/components/kbd.md","filePath":"content/docs/components/kbd.md","lastUpdated":null}'),d={name:"docs/components/kbd.md"},h=s("h2",{id:"installation",tabindex:"-1"},[o("Installation "),s("a",{class:"header-anchor",href:"#installation","aria-label":'Permalink to "Installation"'},"​")],-1),v=s("h3",{id:"copy-and-paste-the-following-code-into-your-project",tabindex:"-1"},[o("Copy and paste the following code into your project "),s("a",{class:"header-anchor",href:"#copy-and-paste-the-following-code-into-your-project","aria-label":'Permalink to "Copy and paste the following code into your project"'},"​")],-1),u=s("div",{class:"language-vue"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki css-variables vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"<"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),s("span",{style:{color:"var(--shiki-token-function)"}}," setup"),s("span",{style:{color:"var(--shiki-token-function)"}}," lang"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-token-string-expression)"}},'"ts"'),s("span",{style:{color:"var(--shiki-foreground)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),s("span",{style:{color:"var(--shiki-foreground)"}}," { computed } "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),s("span",{style:{color:"var(--shiki-token-string-expression)"}}," 'vue'")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"interface"),s("span",{style:{color:"var(--shiki-token-function)"}}," KbdProps"),s("span",{style:{color:"var(--shiki-foreground)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"    as"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"?:"),s("span",{style:{color:"var(--shiki-token-constant)"}}," string")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"    size"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"?:"),s("span",{style:{color:"var(--shiki-token-string-expression)"}}," 'xs'"),s("span",{style:{color:"var(--shiki-token-keyword)"}}," |"),s("span",{style:{color:"var(--shiki-token-string-expression)"}}," 'sm'"),s("span",{style:{color:"var(--shiki-token-keyword)"}}," |"),s("span",{style:{color:"var(--shiki-token-string-expression)"}}," 'md'")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),s("span",{style:{color:"var(--shiki-token-constant)"}}," props"),s("span",{style:{color:"var(--shiki-token-keyword)"}}," ="),s("span",{style:{color:"var(--shiki-token-function)"}}," withDefaults"),s("span",{style:{color:"var(--shiki-foreground)"}},"("),s("span",{style:{color:"var(--shiki-token-function)"}},"defineProps"),s("span",{style:{color:"var(--shiki-foreground)"}},"<"),s("span",{style:{color:"var(--shiki-token-function)"}},"KbdProps"),s("span",{style:{color:"var(--shiki-foreground)"}},">()"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},","),s("span",{style:{color:"var(--shiki-foreground)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"    as"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-token-string-expression)"}}," 'kbd'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"    size"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-token-string-expression)"}}," 'sm'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"})")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),s("span",{style:{color:"var(--shiki-token-constant)"}}," kbdClass"),s("span",{style:{color:"var(--shiki-token-keyword)"}}," ="),s("span",{style:{color:"var(--shiki-token-function)"}}," computed"),s("span",{style:{color:"var(--shiki-foreground)"}},"(() "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),s("span",{style:{color:"var(--shiki-foreground)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"    const"),s("span",{style:{color:"var(--shiki-token-constant)"}}," baseClass"),s("span",{style:{color:"var(--shiki-token-keyword)"}}," =")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-string-expression)"}},"        'inline-flex items-center pointer-events-none h-5 select-none gap-1 rounded-md border border-border bg-muted font-sans font-medium'")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"    const"),s("span",{style:{color:"var(--shiki-token-constant)"}}," sizeClasses"),s("span",{style:{color:"var(--shiki-token-keyword)"}}," ="),s("span",{style:{color:"var(--shiki-foreground)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"        xs"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-token-string-expression)"}}," 'min-h-4 text-[10px] h-4 px-1'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"        sm"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-token-string-expression)"}}," 'min-h-5 text-[11px] h-5 px-1'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"        md"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-token-string-expression)"}}," 'min-h-6 text-[12px] h-6 px-1.5'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"    }")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"    return"),s("span",{style:{color:"var(--shiki-token-string-expression)"}}," `"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"${"),s("span",{style:{color:"var(--shiki-foreground)"}},"baseClass"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"}"),s("span",{style:{color:"var(--shiki-token-keyword)"}}," ${"),s("span",{style:{color:"var(--shiki-foreground)"}},"sizeClasses["),s("span",{style:{color:"var(--shiki-token-constant)"}},"props"),s("span",{style:{color:"var(--shiki-foreground)"}},".size "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"||"),s("span",{style:{color:"var(--shiki-token-string-expression)"}}," 'sm'"),s("span",{style:{color:"var(--shiki-foreground)"}},"]"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"}"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"`")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"})")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),s("span",{style:{color:"var(--shiki-foreground)"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"<"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),s("span",{style:{color:"var(--shiki-foreground)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"    <"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"component")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"        :"),s("span",{style:{color:"var(--shiki-token-function)"}},"is"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-foreground)"}},'"'),s("span",{style:{color:"var(--shiki-token-constant)"}},"props"),s("span",{style:{color:"var(--shiki-foreground)"}},".as"),s("span",{style:{color:"var(--shiki-foreground)"}},'"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"        :"),s("span",{style:{color:"var(--shiki-token-function)"}},"class"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-foreground)"}},'"'),s("span",{style:{color:"var(--shiki-foreground)"}},"kbdClass"),s("span",{style:{color:"var(--shiki-foreground)"}},'"'),s("span",{style:{color:"var(--shiki-foreground)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"        <"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"slot"),s("span",{style:{color:"var(--shiki-foreground)"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"    </"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"component"),s("span",{style:{color:"var(--shiki-foreground)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-foreground)"}},"</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),s("span",{style:{color:"var(--shiki-foreground)"}},">")])])])],-1),f=s("h2",{id:"props",tabindex:"-1"},[o("Props "),s("a",{class:"header-anchor",href:"#props","aria-label":'Permalink to "Props"'},"​")],-1);function g(m,x,w,b,_,C){const r=e("ComponentPreview"),a=e("CodeWrapper"),i=e("APITable");return y(),l("div",null,[n(r,p(c({name:"KbdDemo"})),null,16),h,v,n(a,null,{default:k(()=>[u]),_:1}),f,n(i,{type:"prop",data:[{name:"as",description:"The HTML tag to use for rendering the component.",type:"string",required:!1,default:"kbd"},{name:"size",description:"The size of the component. Determines the height and font size.",type:"xs | sm | md",required:!1,default:"sm"}]})])}const D=t(d,[["render",g]]);export{z as __pageData,D as default};
