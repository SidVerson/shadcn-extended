import {
  haxe
} from "./chunk-TPSUIJKO.js";
import "./chunk-DC5AMYBS.js";

// node_modules/shiki/dist/langs/hxml.mjs
var lang = Object.freeze({ "displayName": "HXML", "fileTypes": ["hxml"], "foldingStartMarker": "--next", "foldingStopMarker": "\\n\\n", "name": "hxml", "patterns": [{ "captures": { "1": { "name": "punctuation.definition.comment.hxml" } }, "match": "(#).*$\\n?", "name": "comment.line.number-sign.hxml" }, { "begin": "(?<!\\w)(--macro)\\b", "beginCaptures": { "1": { "name": "keyword.other.hxml" } }, "end": "\\n", "patterns": [{ "include": "source.hx#block-contents" }] }, { "captures": { "1": { "name": "keyword.other.hxml" }, "2": { "name": "support.package.hx" }, "4": { "name": "entity.name.type.hx" } }, "match": "(?<!\\w)(-m|-main|--main|--run)\\b\\s*\\b(?:(([a-z][a-zA-Z0-9]*\\.)*)(_*[A-Z]\\w*))?\\b" }, { "captures": { "1": { "name": "keyword.other.hxml" } }, "match": "(?<!\\w)(-cppia|-cpp?|-js|-as3|-swf-(header|version|lib(-extern)?)|-swf9?|-neko|-python|-php|-cs|-java-lib|-java|-xml|-lua|-hl|-x|-lib|-D|-resource|-exclude|-version|-v|-debug|-prompt|-cmd|-dce\\s+(std|full|no)?|--flash-strict|--no-traces|--flash-use-stage|--neko-source|--gen-hx-classes|-net-lib|-net-std|-c-arg|--each|--next|--display|--no-output|--times|--no-inline|--no-opt|--php-front|--php-lib|--php-prefix|--remap|--help-defines|--help-metas|-help|--help|-java|-cs|--js-modern|--interp|--eval|--dce|--wait|--connect|--cwd|--run).*$" }, { "captures": { "1": { "name": "keyword.other.hxml" } }, "match": "(?<!\\w)(--js(on)?|--lua|--swf-(header|version|lib(-extern)?)|--swf|--as3|--neko|--php|--cppia|--cpp|--cppia|--cs|--java-lib(-extern)?|--java|--jvm|--python|--hl|-p|--class-path|-L|--library|--define|-r|--resource|--cmd|-C|--verbose|--debug|--prompt|--xml|--json|--net-lib|--net-std|--c-arg|--version|--haxelib-global|-h|--main|--server-connect|--server-listen).*$" }], "scopeName": "source.hxml", "embeddedLangs": ["haxe"] });
var hxml = [
  ...haxe,
  lang
];
export {
  hxml as default
};
//# sourceMappingURL=hxml-JFGK5OAZ.js.map
