// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/topic dojo/Deferred dojo/on ./utils ./WidgetManager ./shared/AppVersionManager ./ConfigLoader ./tokenUtils ./dijit/AGOLLoading ./portalUrlUtils ./portalUtils esri/config esri/tasks/GeometryService".split(" "),function(w,f,k,n,g,x,r,h,y,z,A,B,C,u,D,E,F){function v(a,c){var b=f.clone(a),d=h.widgetProperties;"undefined"===typeof c&&(c=!1);delete b.mode;delete b.configWabVersion;h.visitElement(b,function(e,l){e.widgets?(delete e.isOnScreen,
delete e.gid,"jimu.js/images/group_icon.png"===e.icon&&delete e.icon,delete e.openType,l.isOnScreen&&e.panel&&h.isEqual(e.panel,b.widgetOnScreen.panel)&&delete e.panel):(e.icon&&e.icon===e.folderUrl+"images/icon.png?wab_dv\x3d"+window.deployVersion&&delete e.icon,delete e.panel,delete e.folderUrl,delete e.amdFolder,delete e.thumbnail,delete e.configFile,delete e.gid,delete e.isOnScreen,delete e.isRemote,delete e.featureActions,d.forEach(function(m){delete e[m]}),c?"undefined"===typeof e.openAtStart&&
(e.openAtStart=!1):(e.visible&&delete e.visible,e.manifest&&e.label===e.manifest.label&&delete e.label,e.isDefaultConfig&&(delete e.config,delete e.isDefaultConfig)),delete e.manifest,e.itemId&&delete e.uri)});delete b.rawAppConfig;delete b._ssl;delete b.getConfigElementById;delete b.getConfigElementsByName;delete b.processNoUriWidgets;delete b.addElementId;delete b.getCleanConfig;delete b.visitElement;delete b.agolConfig;delete b._itemData;delete b.oldWabVersion;delete b.titleColor;return b}var q=
null;var t=w(null,{urlParams:null,appConfig:null,configFile:null,_configLoaded:!1,portalSelf:null,constructor:function(a){this.urlParams=a||{};this.listenBuilderEvents();this.versionManager=new z;this.widgetManager=y.getInstance();this.configLoader=A.getInstance(this.urlParams,{versionManager:this.versionManager});"config"===this.urlParams.mode&&window.parent.setConfigViewerTopic&&f.isFunction(window.parent.setConfigViewerTopic)&&window.parent.setConfigViewerTopic(g);"preview"===this.urlParams.mode&&
window.parent.setPreviewViewerTopic&&f.isFunction(window.parent.setPreviewViewerTopic)&&window.parent.setPreviewViewerTopic(g);h.isMobileUa()||r(window,"resize",f.hitch(this,this._onWindowResize));r(window,"orientationchange",f.hitch(this,this._onOrientationChange))},listenBuilderEvents:function(){g.subscribe("builder/widgetChanged",f.hitch(this,this._onWidgetChanged));g.subscribe("builder/groupChanged",f.hitch(this,this._onGroupChanged));g.subscribe("builder/layoutDefinitionChanged",f.hitch(this,
this._onLayoutDefinitionChanged));g.subscribe("builder/onScreenGroupsChanged",f.hitch(this,this._onOnScreenGroupsChanged));g.subscribe("builder/widgetPoolChanged",f.hitch(this,this._onWidgetPoolChanged));g.subscribe("builder/openAtStartChange",f.hitch(this,this._onOpenAtStartChanged));g.subscribe("builder/onScreenOrderChanged",f.hitch(this,this._onScreenOrderChanged));g.subscribe("builder/mapContentModified",f.hitch(this,this._onMapContentModified));g.subscribe("builder/mapChanged",f.hitch(this,this._onMapChanged));
g.subscribe("builder/mapOptionsChanged",f.hitch(this,this._onMapOptionsChanged));g.subscribe("builder/mapRefreshIntervalChanged",f.hitch(this,this._onMapRefreshIntervalChanged));g.subscribe("builder/appAttributeChanged",f.hitch(this,this._onAppAttributeChanged));g.subscribe("builder/dataSourceChanged",f.hitch(this,this._onDataSourceChanged));g.subscribe("builder/setAppConfig",f.hitch(this,this._onAppConfigSet));g.subscribe("builder/themeChanged",f.hitch(this,this._onThemeChanged));g.subscribe("builder/layoutChanged",
f.hitch(this,this._onLayoutChanged));g.subscribe("builder/styleChanged",f.hitch(this,this._onStyleChanged));g.subscribe("builder/syncExtent",f.hitch(this,this._onSyncExtent));g.subscribe("builder/loadingPageChanged",f.hitch(this,this._onLoadingPageChanged));g.subscribe("builder/templateConfigChanged",f.hitch(this,this._onTemplateConfigChanged));g.subscribe("builder/appProxyForMapChanged",f.hitch(this,this._onAppProxyForMapChanged));g.subscribe("builder/appProxyForUrlChanged",f.hitch(this,this._onAppProxyForUrlChanged));
g.subscribe("builder/sharedThemeChanged",f.hitch(this,this._onSharedThemeChanged))},loadConfig:function(){if("preview"!==this.urlParams.mode&&"config"!==this.urlParams.mode){var a=new C;a.placeAt(window.jimuConfig.layoutId);return this.configLoader.loadConfig().then(f.hitch(this,function(c){this.portalSelf=this.configLoader.portalSelf;this.appConfig=this._addDefaultValues(c);console.timeEnd("Load Config");window.appInfo.isRunInMobile=h.inMobileSize();c=this.getAppConfig();a.destroy();g.publish("appConfigLoaded",
c);return c}),f.hitch(this,function(c){a.destroy();console.error(c);c&&c.message&&"string"===typeof c.message&&this._showErrorMessage(c)}))}},_showErrorMessage:function(a){if(!1===a.isSelfOrigin){n.create("div",{"class":"app-error",innerHTML:h.sanitizeHTML(a.message||a)},document.body);a=n.create("div",{"class":"app-error",innerHTML:h.sanitizeHTML(window.jimuNls.common.close)},document.body);n.setStyle(a,{"margin-top":"80px","padding-top":0,background:"none",cursor:"pointer"});r(a,"click",f.hitch(this,
function(){window.close()}));n.setStyle(a,"display","none");a=n.create("div",{"class":"app-error"},document.body);n.setStyle(a,{"margin-top":"90px","padding-top":0,background:"none"});a=n.create("div",{"class":"app-error-advanced-button",innerHTML:h.sanitizeHTML(window.jimuNls.advancedOptions)},a);n.setStyle(a,{margin:"0 auto 0 auto",color:"#666",padding:"8px 12px 8px 12px",background:"none",border:"1px solid #ccc",display:"inline-block","border-radius":"4px",cursor:"pointer"});r(a,"click",f.hitch(this,
function(){n.setStyle(b,"display","block")}));a=window.location.href;var c=u.getStandardPortalUrl(window.location.origin);c=u.getArcgisOnlineUrl(c);a=a.replace(window.location.origin,c);a=window.jimuNls.proceedTo.replace("${value}","\x3ca href\x3d"+a+"\x3e"+a+"\x3c/a\x3e");var b=n.create("div",{"class":"app-error",innerHTML:h.sanitizeHTML(a)},document.body);n.setStyle(b,{"margin-top":"140px",display:"none","padding-top":0,background:"none"})}else n.create("div",{"class":"app-error",innerHTML:h.sanitizeHTML(a.message||
a)},document.body);n.setStyle(jimuConfig.loadingId,"display","none")},getAppConfig:function(){if(window.appInfo.isRunInMobile){var a=f.clone(this._getMobileConfig(this.appConfig));a._originConfig=f.clone(this.appConfig)}else a=f.clone(this.appConfig);a.getConfigElementById=function(c){return h.getConfigElementById(this,c)};a.getConfigElementsByName=function(c){return h.getConfigElementsByName(this,c)};a.getCleanConfig=function(c){return this._originConfig?v(this._originConfig,c):v(this,c)};a.visitElement=
function(c){h.visitElement(this,c)};return a},_onOrientationChange:function(){this.appConfig&&g.publish("appConfigChanged",this.getAppConfig(),"layoutChange")},_onWindowResize:function(){var a=h.inMobileSize();window.appInfo.isRunInMobile!==a&&(window.appInfo.isRunInMobile=a,this.appConfig&&g.publish("appConfigChanged",this.getAppConfig(),"layoutChange"))},_getMobileConfig:function(a){return h.mixinAppConfigPosition(a,a.mobileLayout)},_updateDataSourceForWidget:function(a){this._deleteDataSourcesFromWidget(a);
this._addDataSourcesForWidget(a)},_deleteDataSourcesFromWidget:function(a){for(var c in this.appConfig.dataSource.dataSources)c.startWith("widget~"+a.id+"~")&&delete this.appConfig.dataSource.dataSources[c]},_addDataSourcesForWidget:function(a){k.forEach(a.provideDataSources,function(c){var b="widget~"+a.id+"~"+c.id;c.id=b;this.appConfig.dataSource.dataSources[b]=c},this);delete a.provideDataSources},_addIdForWidgets:function(a){var c=0,b;this.getAppConfig().visitElement(function(d){if(d.id){d.id=
d.id.replace(/\//g,"_");var e=d.id.lastIndexOf("_");-1<e&&(b=d.id.substr(e+1),c=Math.max(c,b))}});k.forEach(a,function(d){d.id||(c++,d.id=d.itemId?d.itemId+"_"+c:d.uri?d.uri.replace(/\//g,"_")+"_"+c:"_"+c)})},_onWidgetChanged:function(a){var c=h.reCreateObject(a);a=h.getConfigElementById(this.appConfig,a.id);this._updateDataSourceForWidget(c);!1!==c.inPanel||a.uri||(c.closeable=!0);for(var b in c)a[b]=c[b];delete a.isDefaultConfig;this.configLoader.addNeedValues(this.appConfig);this._addDefaultValues(this.appConfig);
g.publish("appConfigChanged",this.getAppConfig(),"widgetChange",c)},_onGroupChanged:function(a){var c=h.reCreateObject(a);a=h.getConfigElementById(this.appConfig,a.id);this._handleDataSourceForWidgets(a,c);for(var b in c)a[b]=c[b];this.configLoader.addNeedValues(this.appConfig);this._addDefaultValues(this.appConfig);g.publish("appConfigChanged",this.getAppConfig(),"groupChange",c)},_handleDataSourceForWidgets:function(a,c){var b=k.filter(c.widgets,function(d){return d.id?0===k.filter(a.widgets,function(e){return d.id===
e.id}).length:!0},this);this._addIdForWidgets(b);k.forEach(b,function(d){this._addDataSourcesForWidget(d)},this);b=k.filter(a.widgets,function(d){return 0===k.filter(c.widgets,function(e){return e.id===d.id}).length},this);k.forEach(b,function(d){this._deleteDataSourcesFromWidget(d)},this);k.forEach(c.widgets,function(d){k.forEach(a.widgets,function(e){d.id===e.id&&d.provideDataSources&&this._updateDataSourceForWidget(d)},this)},this)},_onWidgetPoolChanged:function(a){var c=h.reCreateObject(a);this._handleDataSourceForWidgetsSection(this.appConfig.widgetPool,
c);1===this.widgetManager.getControllerWidgets().length?(this.appConfig.widgetPool.widgets=c.widgets,this.appConfig.widgetPool.groups=c.groups):(a=h.getConfigElementById(this.appConfig,c.controllerId),k.forEach(a.controlledWidgets,function(b){this._removeWidgetOrGroupFromPoolById(this.appConfig,b)},this),k.forEach(a.controlledGroups,function(b){this._removeWidgetOrGroupFromPoolById(this.appConfig,b)},this),this.appConfig.widgetPool.widgets="undefined"===typeof this.appConfig.widgetPool.widgets?c.widgets:
this.appConfig.widgetPool.widgets.concat(c.widgets),this.appConfig.widgetPool.groups="undefined"===typeof this.appConfig.widgetPool.groups?c.groups:this.appConfig.widgetPool.groups.concat(c.groups),a.controlledWidgets=k.map(c.widgets,function(b){return b.id}),a.controlledGroups=k.map(c.groups,function(b){return b.id}));this.configLoader.addNeedValues(this.appConfig);this.configLoader.loadAndUpgradeAllWidgetsConfig(this.appConfig).then(f.hitch(this,function(b){this.appConfig=b;this._addDefaultValues(this.appConfig);
g.publish("appConfigChanged",this.getAppConfig(),"widgetPoolChange",c)}))},_handleDataSourceForWidgetsSection:function(a,c){var b=c.widgets;k.forEach(c.groups,function(e){b=b.concat(e.widgets)},this);var d=a.widgets;k.forEach(a.groups,function(e){d=d.concat(e.widgets)},this);this._handleDataSourceForWidgets({widgets:d},{widgets:b})},_removeWidgetOrGroupFromPoolById:function(a,c){k.some(a.widgetPool.widgets,function(b,d){if(b.id===c)return a.widgetPool.widgets.splice(d,1),!0});k.some(a.widgetPool.groups,
function(b,d){if(b.id===c)return a.widgetPool.groups.splice(d,1),!0})},_onOpenAtStartChanged:function(a){var c=h.reCreateObject(a),b=this.appConfig;a.isOnScreen?(b=b.widgetOnScreen&&b.widgetOnScreen.widgets)&&0<b.length&&k.forEach(b,f.hitch(this,function(d){d.id===a.id?d.openAtStart=!d.openAtStart:delete d.openAtStart})):((b=b.widgetPool)&&b.groups&&0<b.groups.length&&k.forEach(b.groups,f.hitch(this,function(d){d.id===a.id?d.openAtStart=!d.openAtStart:delete d.openAtStart})),b&&b.widgets&&0<b.widgets.length&&
k.forEach(b.widgets,f.hitch(this,function(d){d.id===a.id?d.openAtStart=!d.openAtStart:delete d.openAtStart})));g.publish("appConfigChanged",this.getAppConfig(),"openAtStartChange",c)},_onScreenOrderChanged:function(a){var c=h.reCreateObject(a);k.forEach(this.appConfig.widgetOnScreen.widgets,function(b){b.isController||(!1!==b.inPanel||!0!==b.closeable)&&!0!==b.inPanel&&b.uri||k.some(c,function(d){if(b.id===d.id)return b.position=d.position,!0})},this);g.publish("appConfigChanged",this.getAppConfig(),
"onScreenOrderChange",c)},_onAppAttributeChanged:function(a){a=h.reCreateObject(a);f.mixin(this.appConfig,a);this.configLoader.processProxy(this.appConfig);this.configLoader.addNeedValues(this.appConfig);this._addDefaultValues(this.appConfig);g.publish("appConfigChanged",this.getAppConfig(),"attributeChange",a)},_onDataSourceChanged:function(a){var c=h.reCreateObject(a);this.appConfig.dataSource=c;g.publish("appConfigChanged",this.getAppConfig(),"dataSourceChange",a)},_onLoadingPageChanged:function(a){a=
h.reCreateObject(a);if("backgroundColor"in a)this.appConfig.loadingPage.backgroundColor=a.backgroundColor;else if("backgroundImage"in a){var c=this.appConfig.loadingPage.backgroundImage||{};this.appConfig.loadingPage.backgroundImage=f.mixin(c,a.backgroundImage)}else"loadingGif"in a&&(c=this.appConfig.loadingPage.loadingGif||{},this.appConfig.loadingPage.loadingGif=f.mixin(c,a.loadingGif));this.configLoader.addNeedValues(this.appConfig);this._addDefaultValues(this.appConfig);g.publish("appConfigChanged",
this.getAppConfig(),"loadingPageChange",a)},_onAppProxyForMapChanged:function(a){a=h.reCreateObject(a);"appProxy"in this.appConfig.map?this.appConfig.map.appProxy.mapItemId!==a.mapItemId?this.appConfig.map.appProxy=a:k.forEach(a.proxyItems,f.hitch(this,function(c){if(!k.some(this.appConfig.map.appProxy.proxyItems,function(d){if(d.sourceUrl===c.sourceUrl)return d.useProxy=c.useProxy,d.proxyUrl=c.proxyUrl||"",d.proxyId=c.proxyId||"",isNaN(c.hitsPerInterval)||(d.hitsPerInterval=c.hitsPerInterval),isNaN(c.intervalSeconds)||
(d.intervalSeconds=c.intervalSeconds),!0})&&c.useProxy&&c.proxyUrl){var b=this.appConfig.map.appProxy.proxyItems||[];b.push(c);this.appConfig.map.appProxy.proxyItems=b}})):this.appConfig.map.appProxy=a;g.publish("appConfigChanged",this.getAppConfig(),"appProxyChange",a)},_onAppProxyForUrlChanged:function(a){a=h.reCreateObject(a);this.appConfig.appProxies=a;g.publish("appConfigChanged",this.getAppConfig(),"appProxyChange",a)},_onTemplateConfigChanged:function(a){a=h.reCreateObject(a);this.appConfig.templateConfig=
a;this.configLoader.addNeedValues(this.appConfig);this._addDefaultValues(this.appConfig);g.publish("appConfigChanged",this.getAppConfig(),"templateConfigChange",a)},_onMapContentModified:function(){g.publish("mapContentModified")},_onMapChanged:function(a){var c=h.reCreateObject(a);this.appConfig.map.mapOptions&&h.deleteMapOptions(this.appConfig.map.mapOptions);this.appConfig.map.mapRefreshInterval={useWebMapRefreshInterval:!0};f.mixin(this.appConfig.map,c);this._deleteDataSourcesFromMap();this.configLoader.addNeedValues(this.appConfig);
this.configLoader.loadAndUpgradeAllWidgetsConfig(this.appConfig).then(f.hitch(this,function(b){this.appConfig=b;this._addDefaultValues(this.appConfig);g.publish("appConfigChanged",this.getAppConfig(),"mapChange",c)}))},_deleteDataSourcesFromMap:function(){k.forEach(Object.keys(this.appConfig.dataSource.dataSources),function(a){a.startWith("map")&&delete this.appConfig.dataSource.dataSources[a]},this)},_onMapOptionsChanged:function(a){a=h.reCreateObject(a);this.appConfig.map.mapOptions||(this.appConfig.map.mapOptions=
{});f.mixin(this.appConfig.map.mapOptions,a);g.publish("appConfigChanged",this.getAppConfig(),"mapOptionsChange",a)},_onMapRefreshIntervalChanged:function(a){a=h.reCreateObject(a);this.appConfig.map.mapRefreshInterval||(this.appConfig.map.mapRefreshInterval={});f.mixin(this.appConfig.map.mapRefreshInterval,a);this.appConfig.map.mapRefreshInterval.useWebMapRefreshInterval&&delete this.appConfig.map.mapRefreshInterval.minutes;g.publish("appConfigChanged",this.getAppConfig(),"mapRefreshIntervalChange",
a)},_onThemeChanged:function(a){this._getAppConfigFromTheme(a).then(f.hitch(this,function(c){var b=f.clone(this.appConfig.widgetOnScreen);this.appConfig=c;this._handleDataSourceForWidgetsSection(b,{});g.publish("appConfigChanged",this.getAppConfig(),"themeChange",a.getName())}))},_onLayoutChanged:function(a){this.appConfig=h.mixinAppConfigPosition(this.appConfig,a.layoutConfig);this.appConfig.layoutDefinition=a.layoutConfig.layoutDefinition;this.configLoader.addNeedValues(this.appConfig);this._addDefaultValues(this.appConfig);
g.publish("appConfigChanged",this.getAppConfig(),"layoutChange",a.name)},_onStyleChanged:function(a){this.appConfig.theme.styles=this._genStyles(this.appConfig.theme.styles,a.name);a.isCustom?this.appConfig.theme.customStyles={mainBackgroundColor:a.styleColor}:(delete this.appConfig.theme.customStyles,delete this.appConfig.titleColor,this.appConfig.theme.sharedTheme={isPortalSupport:this.appConfig.theme.sharedTheme.isPortalSupport,useHeader:!1,useLogo:!1});g.publish("appConfigChanged",this.getAppConfig(),
"styleChange",a.name)},_onOnScreenGroupsChanged:function(a){a=h.reCreateObject(a);this.appConfig.widgetOnScreen.groups=a.groups;g.publish("appConfigChanged",this.getAppConfig(),"onScreenGroupsChange",a.groups)},_onLayoutDefinitionChanged:function(a){a=h.reCreateObject(a);h.isEqual(this.appConfig.layoutDefinition,a.layoutDefinition)||(this.appConfig.layoutDefinition=a.layoutDefinition,this.appConfig.widgetOnScreen.groups=h.handleGridLayoutOnScreenGroupChange(this.appConfig.widgetOnScreen.groups,a.groupIds),
this.configLoader.addNeedValues(this.appConfig),this._addDefaultValues(this.appConfig),g.publish("appConfigChanged",this.getAppConfig(),"layoutDefinitionChange",a.layoutDefinition))},_onSharedThemeChanged:function(a){var c=this.appConfig.theme.sharedTheme;a=h.reCreateObject(a);a.useHeader&&!c.useHeader&&(this.portalSelf.portalProperties&&this.portalSelf.portalProperties.sharedTheme?(this.appConfig.theme.customStyles={mainBackgroundColor:this.portalSelf.portalProperties.sharedTheme.header.background},
this.appConfig.titleColor=this.portalSelf.portalProperties.sharedTheme.header.text,this._onAppAttributeChanged({titleColor:this.appConfig.titleColor})):console.error("Portal does not support sharedTheme."));!a.useHeader&&c.useHeader&&(delete this.appConfig.titleColor,this._onAppAttributeChanged({titleColor:this.appConfig.titleColor}));a.useLogo&&!c.useLogo&&(this.portalSelf.portalProperties&&this.portalSelf.portalProperties.sharedTheme?(this.appConfig.logo=this.portalSelf.portalProperties.sharedTheme.logo&&
this.portalSelf.portalProperties.sharedTheme.logo.small?this.portalSelf.portalProperties.sharedTheme.logo.small:"images/app-logo.png",this.appConfig.logoLink=this.portalSelf.portalProperties.sharedTheme.logo.link,this._onAppAttributeChanged({logo:this.appConfig.logo,logoLink:this.appConfig.logoLink})):console.error("Portal does not support sharedTheme."));!a.useLogo&&c.useLogo&&this._onAppAttributeChanged({logo:this.appConfig.logo});f.mixin(c,a);g.publish("appConfigChanged",this.getAppConfig(),"sharedThemeChange",
a)},_onSyncExtent:function(a){g.publish("syncExtent",a)},_genStyles:function(a,c){var b=[];b.push(c);k.forEach(a,function(d){0>b.indexOf(d)&&b.push(d)});return b},_getAppConfigFromTheme:function(a){var c=new x,b=[],d=this.getAppConfig().getCleanConfig();d.mode=this.urlParams.mode;k.forEach(d.widgetPool.groups,function(m){delete m.panel},this);if(a.appConfig){var e=f.clone(a.appConfig);e.map=d.map;e.map.position=a.appConfig.map.position;this._copyPoolToThemePool(d,e);e.links=d.links;e.title=d.title;
e.subtitle=d.subtitle;e.logo=d.logo}else{var l=a.getCurrentLayout();b=a.getCurrentStyle();e=f.clone(d);l=f.clone(l.layoutConfig);e.widgetOnScreen=l.widgetOnScreen;l.widgetPool&&(k.forEach(l.widgetPool.widgets,function(m){m.isPreconfiguredInTheme=!0}),k.forEach(l.widgetPool.groups,function(m){m.isPreconfiguredInTheme=!0}));this._copyPoolToThemePool(d,l);e.widgetPool=l.widgetPool;l.map&&l.map.position&&(e.map.position=l.map.position);e.mobileLayout=l.mobileLayout;e.layoutDefinition=l.layoutDefinition;
b=this._genStyles(k.map(a.getStyles(),function(m){return m.name}),b.name);e.theme={name:a.getName(),styles:b,version:a.getVersion()};this.portalSelf.portalProperties&&this.portalSelf.portalProperties.sharedTheme?(e.theme.sharedTheme={useHeader:!0,useLogo:!0,isPortalSupport:!0},e.theme.customStyles={mainBackgroundColor:this.portalSelf.portalProperties.sharedTheme.header.background}):(e.theme.sharedTheme={useHeader:!1,useLogo:!1,isPortalSupport:!1},e.theme.customStyles={mainBackgroundColor:""});e.titleColor=
d.titleColor;e.logoLink=d.logoLink}this.configLoader.addNeedValues(e);this.configLoader.loadWidgetsManifest(e).then(f.hitch(this,function(m){return this.configLoader.loadAndUpgradeAllWidgetsConfig(m)})).then(f.hitch(this,function(){this._addDefaultValues(e);c.resolve(e)}));return c},_copyPoolToThemePool:function(a,c){var b=a.widgetPool;c.widgetPool||(c.widgetPool={});a=c.widgetPool;var d=k.filter(a.widgets,function(p){if(p.isPreconfiguredInTheme||!k.some(b.widgets,function(G){return G.name===p.name}))return!0}),
e=k.filter(a.groups,function(p){return p.isPreconfiguredInTheme}),l=k.filter(b.widgets,function(p){return!p.isPreconfiguredInTheme}),m=k.filter(b.groups,function(p){return!p.isPreconfiguredInTheme});l=this._getPoolWidgetsWithoutDuplicated(l,c.widgetOnScreen.widgets||[]);a.widgets=l.concat(d);a.groups=m.concat(e)},_getPoolWidgetsWithoutDuplicated:function(a,c){for(var b=f.clone(a),d=this.getAppConfig(),e=a.length-1;0<=e;e--)for(var l=c.length-1;0<=l;l--)if(c[l].uri){var m=c[l].name;m||(m=h.getWidgetNameFromUri(c[l].uri));
var p=d.getConfigElementById(a[e].id);a[e]&&a[e].name===m&&!1===p.supportMultiInstance&&(console.log("Widget",a[e].name,"is not copied to new theme because this widget exists in new theme."),b.splice(e,1))}return b},_onAppConfigSet:function(a){a=h.reCreateObject(a);window.appInfo.isRunInMobile=h.inMobileSize();this.configLoader.processProxy(a);this.configLoader.addNeedValues(a);this.configLoader.loadAndUpgradeAllWidgetsConfig(a).then(f.hitch(this,function(c){this._addDefaultValues(c);B.setPortalUrl(c.portalUrl);
window.portalUrl=c.portalUrl;this.appConfig?(h.deleteMapOptions(c.map.mapOptions),this.appConfig=c,this._deleteDataSourcesFromMap(),g.publish("appConfigChanged",this.getAppConfig(),"resetConfig",c)):(this.appConfig=c,D.getPortal(c.portalUrl).loadSelfInfo().then(f.hitch(this,function(b){this.portalSelf=b;g.publish("appConfigLoaded",this.getAppConfig())})))}))},_addDefaultValues:function(a){this._addDefaultPortalUrl(a);this._addDefaultGeometryService(a);this._addDefaultStyle(a);this._addDefaultMap(a);
this._addDefaultVisible(a);this._addDefaultDataSource(a);this._addDefaultSharedTheme(a);"undefined"===typeof a.widgetOnScreen&&(a.widgetOnScreen={});"undefined"===typeof a.widgetPool&&(a.widgetPool={});this._addDefaultPanelAndPosition(a);this._addDefaultOfWidgetGroup(a);(a.widgetPool.widgets&&0<a.widgetPool.widgets.length&&void 0===a.widgetPool.widgets[0].index||a.widgetPool.groups&&0<a.widgetPool.groups.length&&void 0===a.widgetPool.groups[0].index)&&this._addIndexForWidgetPool(a);return a},_addDefaultDataSource:function(a){a.dataSource?
(a.dataSource.dataSources||(a.dataSource.dataSources={}),a.dataSource.settings||(a.dataSource.settings={})):a.dataSource={dataSources:{},settings:{}}},_addDefaultPortalUrl:function(a){"undefined"===typeof a.portalUrl&&(a.portalUrl="http://www.arcgis.com/");a.portalUrl&&"/"!==a.portalUrl.substr(a.portalUrl.length-1)&&(a.portalUrl+="/")},_addDefaultGeometryService:function(a){var c=a&&a.geometryService;c=c&&"string"===typeof c&&f.trim(c)?f.trim(c):this.portalSelf.helperServices.geometry.url;a.geometryService=
c;E.defaults.geometryService=new F(a.geometryService)},_addDefaultStyle:function(a){!a.theme||a.theme.styles&&0!==a.theme.styles.length||(a.theme.styles=["default"])},_addDefaultMap:function(a){a.map.id="map";"undefined"===typeof a.map["3D"]&&"undefined"===typeof a.map["2D"]&&(a.map["2D"]=!0);"undefined"===typeof a.map.position&&(a.map.position={left:0,right:0,top:0,bottom:0});"undefined"===typeof a.map.portalUrl&&(a.map.portalUrl=a.portalUrl)},_addDefaultVisible:function(a){h.visitElement(a,function(c){void 0===
c.visible&&(c.visible=!0)})},_addDefaultSharedTheme:function(a){a.theme.sharedTheme?("undefined"===typeof a.theme.sharedTheme.useHeader&&(a.theme.sharedTheme.useHeader=!1),"undefined"===typeof a.theme.sharedTheme.useLogo&&(a.theme.sharedTheme.useLogo=!1)):a.theme.sharedTheme={useHeader:!1,useLogo:!1}},_addDefaultPanelAndPosition:function(a){this._addOnScreenDefaultPanelAndPosition(a);this._addPoolDefaultPanelAndPosition(a)},_addOnScreenDefaultPanelAndPosition:function(a){var c;if(a=a.widgetOnScreen){var b=
a.panel&&a.panel.positionRelativeTo?a.panel.positionRelativeTo:"map";"undefined"===typeof a.panel||"undefined"===typeof a.panel.uri?a.panel={uri:"jimu/OnScreenWidgetPanel",position:{relativeTo:b}}:"undefined"===typeof a.panel.position?a.panel.position={relativeTo:b}:"undefined"===typeof a.panel.position.relativeTo&&(a.panel.position.relativeTo=b);if(a.widgets)for(b=0;b<a.widgets.length;b++)a.widgets[b].position||(a.widgets[b].position={}),a.widgets[b].position.relativeTo||(a.widgets[b].position.relativeTo=
a.widgets[b]&&a.widgets[b].positionRelativeTo?a.widgets[b].positionRelativeTo:"map"),!0!==a.widgets[b].inPanel||a.widgets[b].panel||(a.widgets[b].panel=f.clone(a.panel),a.widgets[b].panel.position=a.widgets[b].position,a.widgets[b].panel.position.relativeTo=a.widgets[b].position.relativeTo);if(a.groups)for(b=0;b<a.groups.length;b++)for(a.groups[b].panel||(a.groups[b].panel=a.panel),a.groups[b].panel&&!a.groups[b].panel.position&&(a.groups[b].panel.position={}),a.groups[b].panel.position.relativeTo||
(a.groups[b].panel.position.relativeTo=a.groups[b].panel.positionRelativeTo?a.groups[b].panel.positionRelativeTo:"map"),a.groups[b].widgets||(a.groups[b].widgets=[]),c=0;c<a.groups[b].widgets.length;c++)a.groups[b].widgets[c].panel=a.groups[b].panel}},_addPoolDefaultPanelAndPosition:function(a){var c,b=a.widgetPool;if(b){var d=b.panel&&b.panel.positionRelativeTo?b.panel.positionRelativeTo:"map";"undefined"===typeof b.panel||"undefined"===typeof b.panel.uri?b.panel={uri:"jimu/OnScreenWidgetPanel",
position:{relativeTo:d}}:"undefined"===typeof b.panel.position?b.panel.position={relativeTo:d}:"undefined"===typeof b.panel.position.relativeTo&&(b.panel.position.relativeTo=d);if(b.groups)for(d=0;d<b.groups.length;d++)for(b.groups[d].panel?b.groups[d].panel.position.relativeTo||(b.groups[d].panel.position.relativeTo=b.groups[d].panel.positionRelativeTo?b.groups[d].panel.positionRelativeTo:"map"):b.groups[d].panel=b.panel,b.groups[d].widgets||(b.groups[d].widgets=[]),c=0;c<b.groups[d].widgets.length;c++)b.groups[d].widgets[c].panel=
b.groups[d].panel;if(b.widgets)for(d=0;d<b.widgets.length;d++)!1===b.widgets[d].inPanel?(c=b.widgets[d].positionRelativeTo?b.widgets[d].positionRelativeTo:"map",b.widgets[d].position)?b.widgets[d].position.relativeTo||(b.widgets[d].position.relativeTo=c):b.widgets[d].position={relativeTo:c}:b.widgets[d].panel||(b.widgets[d].panel=a.widgetPool.panel)}},_addDefaultOfWidgetGroup:function(a){h.visitElement(a,f.hitch(this,function(c,b){c.isOnScreen=b.isOnScreen;c.widgets?(c.gid=c.id,1===c.widgets.length?
(c.label||(c.label=c.widgets[0].label?c.widgets[0].label:window.apiNls.common.groupLabel),c.icon||(c.icon=c.widgets[0].uri?this._getDefaultIconFromUri(c.widgets[0].uri):"jimu.js/images/group_icon.png")):(c.icon=c.icon?c.icon:"jimu.js/images/group_icon.png",c.label=c.label?c.label:window.apiNls.common.groupLabel+" "+b.index)):c.gid=b.groupId}))},_getDefaultIconFromUri:function(a){a=a.split("/");a.pop();return a.join("/")+"/images/icon.png?wab_dv\x3d"+window.deployVersion},_addIndexForWidgetPool:function(a){var c=
0,b,d;if(a.widgetPool.widgets)for(b=0;b<a.widgetPool.widgets.length;b++)a.widgetPool.widgets[b].index=c,c++;if(a.widgetPool.groups)for(b=0;b<a.widgetPool.groups.length;b++)for(a.widgetPool.groups[b].index=c,c++,d=0;d<a.widgetPool.groups[b].widgets.length;d++)a.widgetPool.groups[b].widgets[d].index=d}});t.getInstance=function(a){null===q?q=new t(a):a&&(q.urlParams=a,q.configLoader&&(q.configLoader.urlParams=a));window.getAppConfig=f.hitch(q,q.getAppConfig);return q};return t});