/* PrismJS 1.15.0
https://prismjs.com/download.html#themes=prism-solarizedlight&languages=markup+clike+gml */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function i(e,t){var r=a.util.type(e);switch(t=t||{},r){case"Object":var n=a.util.objId(e);if(t[n])return t[n];var l={};t[n]=l;for(var o in e)e.hasOwnProperty(o)&&(l[o]=i(e[o],t));return l;case"Array":var n=a.util.objId(e);if(t[n])return t[n];var l=[];return t[n]=l,e.forEach(function(e,a){l[a]=i(e,t)}),l}return e}},languages:{extend:function(e,t){var r=a.util.clone(a.languages[e]);for(var n in t)r[n]=t[n];return r},insertBefore:function(e,t,r,n){n=n||a.languages;var i=n[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var s in r)r.hasOwnProperty(s)&&(l[s]=r[s]);r.hasOwnProperty(o)||(l[o]=i[o])}var u=n[e];return n[e]=l,a.languages.DFS(a.languages,function(t,a){a===u&&t!=e&&(this[t]=l)}),l},DFS:function l(e,t,r,n){n=n||{};var i=a.util.objId;for(var o in e)if(e.hasOwnProperty(o)){t.call(e,o,e[o],r||o);var s=e[o],u=a.util.type(s);"Object"!==u||n[i(s)]?"Array"!==u||n[i(s)]||(n[i(s)]=!0,l(s,t,o,n)):(n[i(s)]=!0,l(s,t,null,n))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,r){var n={callback:r,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n);for(var i,l=n.elements||e.querySelectorAll(n.selector),o=0;i=l[o++];)a.highlightElement(i,t===!0,n.callback)},highlightElement:function(t,r,n){for(var i,l,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1].toLowerCase(),l=a.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,t.parentNode&&(o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i));var s=t.textContent,u={element:t,language:i,grammar:l,code:s},g=function(e){u.highlightedCode=e,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),n&&n.call(u.element)};if(a.hooks.run("before-sanity-check",u),!u.code)return a.hooks.run("complete",u),void 0;if(a.hooks.run("before-highlight",u),!u.grammar)return g(a.util.encode(u.code)),void 0;if(r&&_self.Worker){var c=new Worker(a.filename);c.onmessage=function(e){g(e.data)},c.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else g(a.highlight(u.code,u.grammar,u.language))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,r,n,i,l,o){var s=a.Token;for(var u in r)if(r.hasOwnProperty(u)&&r[u]){if(u==o)return;var g=r[u];g="Array"===a.util.type(g)?g:[g];for(var c=0;c<g.length;++c){var f=g[c],h=f.inside,d=!!f.lookbehind,m=!!f.greedy,p=0,v=f.alias;if(m&&!f.pattern.global){var y=f.pattern.toString().match(/[imuy]*$/)[0];f.pattern=RegExp(f.pattern.source,y+"g")}f=f.pattern||f;for(var k=n,b=i;k<t.length;b+=t[k].length,++k){var w=t[k];if(t.length>e.length)return;if(!(w instanceof s)){if(m&&k!=t.length-1){f.lastIndex=b;var _=f.exec(e);if(!_)break;for(var P=_.index+(d?_[1].length:0),A=_.index+_[0].length,O=k,x=b,N=t.length;N>O&&(A>x||!t[O].type&&!t[O-1].greedy);++O)x+=t[O].length,P>=x&&(++k,b=x);if(t[k]instanceof s)continue;j=O-k,w=e.slice(b,x),_.index-=b}else{f.lastIndex=0;var _=f.exec(w),j=1}if(_){d&&(p=_[1]?_[1].length:0);var P=_.index+p,_=_[0].slice(p),A=P+_.length,S=w.slice(0,P),E=w.slice(A),C=[k,j];S&&(++k,b+=S.length,C.push(S));var M=new s(u,h?a.tokenize(_,h):_,v,_,m);if(C.push(M),E&&C.push(E),Array.prototype.splice.apply(t,C),1!=j&&a.matchGrammar(e,t,r,k,b,!0,u),l)break}else if(l)break}}}}},tokenize:function(e,t){var r=[e],n=t.rest;if(n){for(var i in n)t[i]=n[i];delete t.rest}return a.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var r=a.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){var r=a.hooks.all[e];if(r&&r.length)for(var n,i=0;n=r[i++];)n(t)}}},r=a.Token=function(e,t,a,r,n){this.type=e,this.content=t,this.alias=a,this.length=0|(r||"").length,this.greedy=!!n};if(r.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(a){return r.stringify(a,t,e)}).join("");var i={type:e.type,content:r.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var l="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}a.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(a.disableWorkerMessageHandler||_self.addEventListener("message",function(e){var t=JSON.parse(e.data),r=t.language,n=t.code,i=t.immediateClose;_self.postMessage(a.highlight(n,a.languages[r],r)),i&&_self.close()},!1),_self.Prism):_self.Prism;var n=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return n&&(a.filename=n.src,a.manual||n.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(?:true|false)\b/,"function":/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.gamemakerlanguage=Prism.languages.gml=Prism.languages.extend("clike",{number:/(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ulf]*/i,keyword:/\b(?:if|else|switch|case|default|break|for|repeat|while|do|until|continue|exit|return|globalvar|var|enum)\b/,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not|with|at|xor|not)\b/,constant:/\b(self|other|all|noone|global|local|undefined|pointer_(?:invalid|null)|action_(?:stop|restart|continue|reverse)|pi|GM_build_date|GM_version|timezone_(?:local|utc)|gamespeed_(?:fps|microseconds)|ev_(?:create|destroy|step|alarm|keyboard|mouse|collision|other|draw|draw_(?:begin|end|pre|post)|keypress|keyrelease|trigger|(?:left|right|middle|no)_button|(?:left|right|middle)_press|(?:left|right|middle)_release|mouse_(?:enter|leave|wheel_up|wheel_down)|global_(?:left|right|middle)_button|global_(?:left|right|middle)_press|global_(?:left|right|middle)_release|joystick(?:1|2)_(?:left|right|up|down|button1|button2|button3|button4|button5|button6|button7|button8)|outside|boundary|game_start|game_end|room_start|room_end|no_more_lives|animation_end|end_of_path|no_more_health|user\d|step_(?:normal|begin|end)|gui|gui_begin|gui_end)|vk_(?:nokey|anykey|enter|return|shift|control|alt|escape|space|backspace|tab|pause|printscreen|left|right|up|down|home|end|delete|insert|pageup|pagedown|f\d|numpad\d|divide|multiply|subtract|add|decimal|lshift|lcontrol|lalt|rshift|rcontrol|ralt)|mb_(?:any|none|left|right|middle)|c_(?:aqua|black|blue|dkgray|fuchsia|gray|green|lime|ltgray|maroon|navy|olive|purple|red|silver|teal|white|yellow|orange)|fa_(?:left|center|right|top|middle|bottom|readonly|hidden|sysfile|volumeid|directory|archive)|pr_(?:pointlist|linelist|linestrip|trianglelist|trianglestrip|trianglefan)|bm_(?:complex|normal|add|max|subtract|zero|one|src_colour|inv_src_colour|src_color|inv_src_color|src_alpha|inv_src_alpha|dest_alpha|inv_dest_alpha|dest_colour|inv_dest_colour|dest_color|inv_dest_color|src_alpha_sat)|audio_(?:falloff_(?:none|inverse_distance|inverse_distance_clamped|linear_distance|linear_distance_clamped|exponent_distance|exponent_distance_clamped)|old_system|new_system|mono|stereo|3d)|cr_(?:default|none|arrow|cross|beam|size_nesw|size_ns|size_nwse|size_we|uparrow|hourglass|drag|appstart|handpoint|size_all)|spritespeed_framesper(?:second|gameframe)|asset_(?:object|unknown|sprite|sound|room|path|script|font|timeline|tiles|shader)|ds_type_(?:map|list|stack|queue|grid|priority)|ef_(?:explosion|ring|ellipse|firework|smoke|smokeup|star|spark|flare|cloud|rain|snow)|pt_shape_(?:pixel|disk|square|line|star|circle|ring|sphere|flare|spark|explosion|cloud|smoke|snow)|ps_(?:distr|shape)_(?:linear|gaussian|invgaussian|rectangle|ellipse|diamond|line)|ty_(?:real|string)|dll_(?:cdel|cdecl|stdcall)|matrix_(?:view|projection|world)|os_(?:win32|windows|macosx|ios|android|linux|unknown|winphone|win8native|psvita|ps4|xboxone|ps3|uwp)|browser_(?:not_a_browser|unknown|ie|firefox|chrome|safari|safari_mobile|opera|tizen|windows_store|ie_mobile)|device_ios_(?:unknown|iphone|iphone_retina|ipad|ipad_retina|iphone5|iphone6|iphone6plus)|device_(?:emulator|tablet)|display_(?:landscape|landscape_flipped|portrait|portrait_flipped)|of_challenge_(?:win|lose|tie)|leaderboard_type_(?:number|time_mins_secs)|cmpfunc_(?:never|less|equal|lessequal|greater|notequal|greaterequal|always)|cull_(?:noculling|clockwise|counterclockwise)|lighttype_(?:dir|point)|iap_(?:ev_storeload|ev_product|ev_purchase|ev_consume|ev_restore|storeload_ok|storeload_failed|status_uninitialised|status_unavailable|status_loading|status_available|status_processing|status_restoring|failed|unavailable|available|purchased|canceled|refunded)|fb_login_(?:default|fallback_to_webview|no_fallback_to_webview|forcing_webview|use_system_account|forcing_safari)|phy_joint_(?:anchor_1_x|anchor_1_y|anchor_2_x|anchor_2_y|reaction_force_x|reaction_force_y|reaction_torque|motor_speed|angle|motor_torque|max_motor_torque|translation|speed|motor_force|max_motor_force|length_1|length_2|damping_ratio|frequency|lower_angle_limit|upper_angle_limit|angle_limits|max_length|max_torque|max_force)|phy_debug_render_(?:aabb|collision_pairs|coms|core_shapes|joints|obb|shapes)|phy_particle_flag_(?:water|zombie|wall|spring|elastic|viscous|powder|tensile|colourmixing|colormixing)|phy_particle_group_flag_(?:solid|rigid)|phy_particle_data_flag_(?:typeflags|position|velocity|colour|color|category)|achievement_(?:our_info|friends_info|leaderboard_info|info|filter_(?:all_players|friends_only|favorites_only)|type_challenge|type_score_challenge|pic_loaded|show_(?:ui|profile|leaderboard|achievement|bank|friend_picker|purchase_prompt))|network_(?:socket_(?:tcp|udp|bluetooth)|type_(?:connect|disconnect|data|non_blocking_connect)|config_(?:connect_timeout|use_non_blocking_socket|enable_reliable_udp|disable_reliable_udp))|buffer_(?:fixed|grow|wrap|fast|vbuffer|network|u8|s8|u16|s16|u32|s32|u64|f16|f32|f64|bool|text|string|seek_start|seek_relative|seek_end|generalerror|outofspace|outofbounds|invalidtype)|gp_(?:face\d|shoulderl|shoulderr|shoulderlb|shoulderrb|select|start|stickl|stickr|padu|padd|padl|padr|axislh|axislv|axisrh|axisrv)|ov_(?:friends|community|players|settings|gamegroup|achievements)|lb_sort_(?:none|ascending|descending)|lb_disp_(?:none|numeric|time_sec|time_ms)|ugc_(?:result_success|filetype_(?:community|microtrans)|visibility_(?:public|friends_only|private)|query_RankedBy(?:Vote|PublicationDate|Trend|NumTimesReported|TotalVotesAsc|VotesUp|TextSearch)|query_(?:AcceptedForGameRankedByAcceptanceDate|FavoritedByFriendsRankedByPublicationDate|CreatedByFriendsRankedByPublicationDate|NotYetRated)|sortorder_CreationOrder(?:Desc|Asc)|sortorder_(?:TitleAsc|LastUpdatedDesc|SubscriptionDateDesc|VoteScoreDesc|ForModeration)|list_(?:Published|VotedOn|VotedUp|VotedDown|WillVoteLater|Favorited|Subscribed|UsedOrPlayed|Followed)|match_(?:Items|Items_Mtx|Items_ReadyToUse|Collections|Artwork|Videos|Screenshots|AllGuides|WebGuides|IntegratedGuides|UsableInGame|ControllerBindings))|vertex_usage_(?:position|colour|color|normal|texcoord|textcoord|blendweight|blendindices|psize|tangent|binormal|fog|depth|sample)|vertex_type_(?:float\d|colour|color|ubyte4)|layerelementtype_(?:undefined|background|instance|oldtilemap|sprite|tilemap|particlesystem|tile)|tile_(?:rotate|flip|mirror|index_mask)|input_type|se_(?:chorus|compressor|echo|equalizer|flanger|gargle|none|reverb)|text_type|(obj|scr|spr|rm)\w+)\b/,variable:/\b(x|y|(?:x|y)(?:previous|start)|(?:h|v)speed|direction|speed|friction|gravity|gravity_direction|path_(?:index|position|positionprevious|speed|scale|orientation|endaction)|object_index|id|solid|persistent|mask_index|instance_(?:count|id)|alarm|timeline_(?:index|position|speed|running|loop)|visible|sprite_(?:index|width|height|xoffset|yoffset)|image_(?:number|index|speed|depth|xscale|yscale|angle|alpha|blend)|bbox_(?:left|right|top|bottom)|layer|phy_(?:rotation|(?:position|linear_velocity|speed|com|collision|col_normal)_(?:x|y)|angular_(?:velocity|damping)|position_(?:x|y)previous|speed|linear_damping|bullet|fixed_rotation|active|mass|inertia|dynamic|kinematic|sleeping|collision_points)|working_directory|webgl_enabled|view_(?:(?:y|x|w|h)view|(?:y|x|w|h)port|(?:v|h)(?:speed|border)|visible|surface_id|object|enabled|current|angle)|undefined|transition_(?:steps|kind|color)|temp_directory|show_(?:score|lives|health)|secure_mode|score|room_(?:width|speed|persistent|last|height|first|caption)|room|pointer_(?:null|invalid)|os_(?:version|type|device|browser)|mouse_(?:y|x|lastbutton|button)|lives|keyboard_(?:string|lastkey|lastchar|key)|iap_data|health|gamemaker_(?:version|registered|pro)|game_(?:save|project|display)_(?:id|name)|fps_real|fps|event_(?:type|object|number|action)|error_(?:occurred|last)|display_aa|delta_time|debug_mode|cursor_sprite|current_(?:year|weekday|time|second|month|minute|hour|day)|caption_(?:score|lives|health)|browser_(?:width|height)|background_(?:yscale|y|xscale|x|width|vtiled|vspeed|visible|showcolour|showcolor|index|htiled|hspeed|height|foreground|colour|color|blend|alpha)|async_load|application_surface|argument(?:_relitive|_count|\d)|argument|global|local|self|other)\b/});
