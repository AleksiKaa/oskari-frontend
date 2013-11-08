Oskari.registerLocalization({lang:"de",key:"Toolbar",value:{buttons:{link:{tooltip:"Link",ok:"Ok",title:"Link zur Kartenansicht"},print:{tooltip:"Drucken"},history:{reset:"Zurück zur Standardansicht",back:"Zurück",next:"Weiter"},pan:"Kartenauschnitt verschieben",zoom:"Hereinzoomen",measure:{line:"Entfernung messen",area:"Fläche messen"}},measure:{title:"Messfunktionen",close:"Abbrechen",guidance:{measureline:"Messen Sie eine Linie auf der Karte. Doppelklicken, um die Messung zu beenden.",measurearea:"Messen Sie eine Fläche auf der Karte. Doppelklicken, um die Messung zu beenden."}}}}),Oskari.registerLocalization({lang:"de",key:"Search",value:{title:"Ortssuche",desc:"",contentErrorMsg:"Search term contains illegal characters.",searchDescription:"Suche nach Ortsname, Adresse oder Kennzahl.",searchButton:"Suche",searchResultCount:"Die Suche ergab ",searchResultCount2:" Treffer.",searchResultDescriptionMoreResults:"Verfeinern Sie die Suche, um die Anzahl der Treffer zu verringern.",searchResultDescriptionOrdering:"Sie können die Suchergebnisse in der Tabelle durch Anklicken der Spaltenüberschriften sortieren.",searchResults:"Ergebnisse: ",searchResultsDescription:" Treffer ",searchservice_search_alert_title:"Fehler: ",searchservice_search_not_found_anything_text:"Die Suche ergab keine Treffer.",too_short:"Ihr Suchbegriff ist zu kurz.",cannot_be_empty:"Der Suchbegriff darf nicht leer sein",too_many_stars:"Zu viele Platzhalter (*)",grid:{name:"Name",village:"Gemeinde",type:"Typ"},resultBox:{close:"Schließen",title:"Suchergebnisse"}}}),Oskari.registerLocalization({lang:"de",key:"LayerSelector",value:{title:"Kartenebenen",desc:"Wähle Kartenebenen",errors:{title:"Fehler!",generic:"Systemfehler. Bitte versuchen Sie es später noch einmal.",loadFailed:"Fehler beim Laden der Kartenebenen. Laden Sie die Webseite Ihres Browsers erneut und wählen Sie die Kartenebenen.",noResults:"Die Suche ergab keine Treffer.",noResultsForKeyword:"Die Suche ergab keine Stichworte.",minChars:"Minimum 4 Zeichen lang sein."},loading:"Lade...",filter:{text:"Suche Kartenebenen",keywordsTitle:"Stichworte:",shortDescription:"Suche Kartenebenen nach Name, Hersteller oder Stichworten.",description:"You can search map layers by writing a part of the name or producer of the layer. By writing at 4 least characters and pushing enter key you can also search for keywords that are related to the layers. The number after the keyword in the list tells you how many map layers are related to it.",inspire:"Nach Thema",organization:"Nach Datenanbieter",published:"Benutzer",didYouMean:"Meinten Sie:"},published:{organization:"Veröffentlichte Kartenebene",inspire:"Veröffentlichte Kartenebene"},tooltip:{"type-base":"Hintergrundkarte","type-wms":"Kartenebene","type-wfs":"Datenprodukt"},backendStatus:{OK:{tooltip:"Die Kartenebene ist derzeitig verfügbar.",iconClass:"backendstatus-ok"},DOWN:{tooltip:"Die Kartenebene ist derzeitig nicht verfügbar.",iconClass:"backendstatus-down"},MAINTENANCE:{tooltip:"Die Kartenebene könnte in den nächsten Tagen teilweise nicht verfügbar sein..",iconClass:"backendstatus-maintenance"},UNKNOWN:{tooltip:"Die Informationen zur Verfügbarkeit der Kartenebene liegen nicht vor.",iconClass:"backendstatus-ok"}},buttons:{ok:"OK"},types:{syn:"Synonym",lk:"Verwandte Konzept",vk:"Koordinieren Konzept",ak:"Untergeordnete Konzept",yk:"Ûbergeordnete Konzept"}}}),Oskari.registerLocalization({lang:"de",key:"LayerSelection",value:{title:"Ausgewählte Ebenen",desc:"",layer:{style:"Ansicht",show:"Zeige",hide:"Verberge",hidden:"Diese Karte wurde vorübergehend ausgeblendet.","out-of-scale":"Die Daten der Kartenebenen können in diesem Maßstab nicht angezeigt werden.","move-to-scale":"Zu einem geeigneten Maßstab wechseln.","out-of-content-area":"Die Kartenebene enthält an dieser Position keine Daten.","move-to-content-area":"Direkt zum Mittelpunkt der Daten begeben.",description:"Beschreibung","object-data":"Objektdaten",rights:{notavailable:"Veröffentlichung untersagt.",guest:"Melden Sie sich an, um diese Kartenebene zu veröffentlichen.",loggedin:"Veröffentlichung erlaubt",official:"Veröffentlichung für die Nutzung durch Behörden zulässig.","need-login":"Sie müssen sich anmelden.",can_be_published_by_provider:{label:"Veröffentlichung erlaubt für Datenanbieter.",tooltip:"Es werden Datenanbieter-Rechte benötigt, um diese Kartenebene zu veröffentlichen. Sollten Sie ein Datenanbieter sein, kontaktieren Sie bitte den Support-Service und fordern Sie die Veröffentlichungsrechte an."},can_be_published:{label:"Veröffentlichung erlaubt",tooltip:"Die Kartenebene darf ohne eine Begrenzung der Nutzeranzahl in einem eingebundenen Kartenfenster veröffentlicht werden."},can_be_published_map_user:{label:"Veröffentlichung erlaubt",tooltip:"Die Kartenebene darf mit einer eventuellen Begrenzung der Nutzeranzahl pro Woche in einem eingebundenen Kartenfenster veröffentlicht werden."},no_publication_permission:{label:"Veröffentlichung untersagt",tooltip:"Der Datenanbieter hat keine Genehmigung zur Veröffentlichung der Kartenebene in einem eingebundenen Kartenfenster gegeben."},can_be_published_by_authority:{label:"Veröffentlichung erlaubt",tooltip:"Die Kartenebene darf in einem eingebundenen Kartenfenster ohne Nutzungsbeschränkungen veröffentlicht werden."}},tooltip:{"type-base":"Hintergrundkarte","type-wms":"Kartenebene","type-wfs":"Datenprodukt"}}}}),Oskari.registerLocalization({lang:"de",key:"PersonalData",value:{title:"Meine Daten",desc:"Meine Daten",notLoggedIn:"Sie können unter \"Meine Daten\" Kartenansichten speichern und Karten durchsuchen, die Sie auf anderen Webseiten eingebunden haben. <a href='/web/en/login'>Anmelden</a>.",tabs:{myplaces:{title:"Orte",nocategories:"Sie haben die Orte bisher nicht gespeichert.",publishCategory:{privateTooltip:"Die Kartenebene ist nicht öffentlich.| Klicken Sie auf die Kartenebene, um sie öffentlich zu machen.",publicTooltip:"Die Kartenebene ist öffentlich| Klicken Sie auf die Kartenebene, um sie nicht öffentlich zu machen."},editCategory:"Kartenebene bearbeiten",deleteCategory:"Kartenebene löschen",edit:"Bearbeiten","delete":"Löschen",grid:{name:"Name",desc:"Beschreibung",createDate:"Erstellt",updateDate:"Aktualisiert",edit:" ","delete":" "},notification:{"delete":{title:"Ort löschen",confirm:"Möchten Sie diesen Ort löschen?",btnDelete:"Abbrechen",btnCancel:"Cancel",success:"Der Ort wurde gelöscht.",error:"Dieser Ort konnte nicht gelöscht werden. Bitte versuchen Sie es später noch einmal.",cancel:"Der Ort wurde nicht gelöscht."}}},myviews:{title:"Meine Kartenansichten",edit:"Bearbeiten",publish:"Veröffentlichen",unpublish:"Veröffentlichung rückgängig machen","delete":"Löschen",grid:{name:"Name",description:"Beschreibung",publish:"Veröffentlicht",edit:" ","delete":" "},popup:{edit:"Informationen zur Kartenansicht bearbeiten",title:"Kartenansicht speichern",label:"Name der Kartenansicht:",name_placeholder:"Geben Sie der Kartenansicht einen Namen",description_placeholder:"Beschreiben Sie die Kartenansicht",save:"Speichern",cancel:"Abbrechen",error_noname:"Geben Sie den Namen ein",deletetitle:"Löschen bestätigen",deletemsg:"Möchten Sie diese Kartenansicht löschen?"},save:{success:"Diese Kartenansicht wurde gespeichert.",error_noname:"Das Namensfeld darf nicht leer sein.",error_illegalchars:"Der Name enthält unzulässige Zeichen. Erlaubte Zeichen sind die Buchstaben a-z, å, ä, ö sowie Zahlen, Bindestriche und die Backspace-Taste.",msg:{view_name:"Der Name der Kartenansicht"}},button:{ok:"OK",save:"Speichern",cancel:"Abbrechen",toolbarsave:"Kartenansicht speichern"},error:{title:"Fehler!",generic:"Systemfehler! Bitte versuchen Sie es später noch einmal",notsaved:"Die Kartenansicht konnte nicht gespeichert werden.",notdeleted:"Die Kartenansicht konnte nicht gelöscht werden.",makePublic:"Die Kartenansicht konnte nicht veröffentlicht werden. Bitte versuchen Sie es später noch einmal.",makePrivate:"Die Veröffentlichung der Kartenansicht konnte nicht rückgängig gemacht werden. Bitte versuchen Sie es später noch einmal.",loadfailed:"Die Kartenansichten konnte nicht heruntergeladen werden."}},publishedmaps:{title:"Eingebundene Karten",show:"Auf der Karte anzeigen",edit:"Bearbeiten",publish:"Karte veröffentlichen",unpublish:"Veröffentlichung der Karte rückgängig machen","delete":"Löschen",grid:{name:"Name",domain:"Karteneinstellungen",publish:"Status",show:" ",edit:" ","delete":" "},popup:{edit:"Kartenname ändern",title:"Karte speichern",label:"Kartenname",placeholder:"Geben Sie der Karte einen Namen",save:"Speichern",cancel:"Abbrechen",error_noname:"Geben Sie der Karte einen Namen",deletetitle:"Karte löschen?",deletemsg:"Möchten Sie die eingebundene Karte löschen? Sie wird nicht länger auf Ihrer Webseite angezeigt.",showErrorTitle:"Unvollständige Ansicht",showConfirmMissing:"Einige der gespeicherten Kartenebenen sind nicht verfügbar. Möchten Sie die Ansicht trotzdem öffnen?",showConfirmNotLoaded:"Einige Kartenebenen sind noch nicht geladen, bitte versuchen Sie es später noch einmal."},save:{success:"Die Karte wurde gespeichert.",error_noname:"Das Namensfeld darf nicht leer sein.",error_illegalchars:"Der Name enthält unzulässige Zeichen. Erlaubte Zeichen sind die Buchstaben a-z, å, ä, ö sowie Zahlen, Bindestriche und die Backspace-Taste.",msg:{view_name:"Kartenname"}},button:{ok:"OK",save:"Speichern",cancel:"Abbrechen",toolbarsave:"Karte speichern"},error:{title:"Fehler!",generic:"Systemfehler! Bitte versuchen Sie es später noch einmal.",notsaved:"Die Karte konnte nicht gespeichert werden.",notdeleted:"Die Karte konnte nicht gelöscht werden.",makePublic:"Die Karte konnte nicht veröffentlicht werden. Bitte versuchen Sie es später noch einmal.",makePrivate:"Die Veröffentlichung der Karte konnte nicht rückgängig gemacht werden. Bitte versuchen Sie es später noch einmal."}},account:{title:"Mein Konto",firstName:"Vorname",lastName:"Nachname",nickName:"Spitzname",email:"E-Mail",changeInfo:"Ändern Sie Ihre Konto-Informationen",changePassword:"Ändern Sie Ihr Passwort",removeAccount:"Löschen Sie Ihr Konto",changeInfoUrl:"/web/en/profile"}},button:{yes:"Ja",no:"Nein"}}}),Oskari.registerLocalization({lang:"de",key:"Publisher",value:{title:"Karte erzeugen",flyouttitle:"Karte erzeugen",desc:"",published:{title:"Ihre Karte wurde erzeugt",desc:"Binden Sie die Karte auf Ihrer Webseite ein, indem Sie den untenstehenden HTML-Code einfügen."},edit:{popup:{title:"Eingebundene Karte wird bearbeitet",msg:"Die Daten einer zuvor eingebundenen Karte werden aktualisiert"}},BasicView:{title:"Karte einbinden",titleEdit:"Eingebundene Karte bearbeiten",domain:{title:"Webseite auf der die Karte eingebunden werden soll",label:"Webseite auf der die Karte eingebunden werden soll",placeholder:'Ohne den Präfix "http" und/oder "www"',tooltip:'Geben Sie den Namen der Indexseite Ihrer Webseite an, z.B. ihren Domain-Namen ohne den Präfix "http" und/oder "www", oder die Adresse einer Unterseite. Beispielsweise: meineWebseite.de'},name:{label:"Der Name der Karte",placeholder:"required",tooltip:"Geben Sie Ihrer Karte einen beschreibenden Namen. Bitte beachten Sie die Sprache der Benutzeroberfläche."},language:{label:"Sprache",options:{fi:"Finnisch",sv:"Schwedisch",en:"Englisch",de:"Deutsch",es:"Spanisch",cs:"Tschechisch"},tooltip:"Wählen Sie die Sprache der Benutzeroberfläche und Kartendaten."},size:{label:"Größe",tooltip:"Wählen oder definieren Sie die Größe der Karte, die auf Ihrer Webseite eingebunden werden soll. Die Kartenvorschau wird in der gewählten Größe angezeigt."},tools:{label:"Werkzeuge",tooltip:"Wählen Sie die Werkzeuge, die für die Karte verfügbar sein sollen. Deren Anordnung wird in der Kartenvorschau angezeigt.",ScaleBarPlugin:"Maßstab",IndexMapPlugin:"Übersichtskarte",PanButtons:"Verschiebe-Funktion",Portti2Zoombar:"Maßstabs-Scrollbalken",ControlsPlugin:"Verschieben nach",SearchPlugin:"Suche nach Adresse und Ortsname",GetInfoPlugin:"Ortsdaten-Abfrage"},data:{label:"Statistics",tooltip:"Show the data related to map.",grid:"Show statistic grid"},layers:{label:"Kartenebenen",defaultLayer:"(Standardebene)",useAsDefaultLayer:"Als Standardebene verwenden"},sizes:{small:"Klein",medium:"Mittel",large:"Groß",custom:"Benutzerdefinierte Größe",width:"Breite",height:"Höhe"},buttons:{save:"Speichern",saveNew:"Speichern unter",ok:"OK",replace:"Ersetzen",cancel:"Abbrechen"},confirm:{replace:{title:"Möchten Sie die eingebundene Karte ersetzen?",msg:'Klicken Sie "Ersetzen", um die Änderungen sofort auf der eingebundenen Karte anzuzeigen. Es ist nicht notwendig, den HTML-Code erneut auf Ihrer Webseite einzufügen.'}},layerselection:{label:"Zeige die Kartenebenen im Menü",info:"Wählen Sie Ihre Hintergrundkarten. Im Vorschaufenster können Sie eine Hintergrundkarte als Standard festlegen.",tooltip:"Die Hintergrundkarte wird als unterste Ebene der Karte angezeigt. Wenn Sie mehrere Hintergrundkarten ausgewählt haben, ist nur eine Hintergrundkarte sichtbar, Sie können zwischen diesen wechseln.  Im Vorschaufenster können Sie eine Hintergrundkarte als Standard festlegen.",promote:"Luftbilder anzeigen?"},preview:"Vorschau der Karte, die eingebunden werden soll.",location:"Ort und Zoomstufe",zoomlevel:"Zoomstufe",help:"Hilfe",error:{title:"Fehler!",size:"Fehler in der Größendefinition",domain:"Die Webseite ist eine notwendige Angabe.",domainStart:'Bitte entfernen Sie den Präfix "http" und/oder "www" aus dem Namen der Webseite.',name:"Der Name ist eine notwendige Angabe.",nohelp:"Es ist keine Hilfe verfügbar",saveFailed:"Das Veröffentlichen der Karte ist fehlgeschlagen. Bitte versuchen Sie es später noch einmal.",nameIllegalCharacters:"Der Name enthält unzulässige Zeichen. Erlaubte Zeichen sind die Buchstaben a-z, å, ä, ö sowie Zahlen, Bindestriche und die Backspace-Taste.",domainIllegalCharacters:"Der Name der Webseite enthält unzulässige Zeichen. Erlaubte Zeichen sind die Buchstaben a-z, å, ä, ö sowie Zahlen, Bindestriche und die Backspace-Taste."}},NotLoggedView:{text:"Sie müssen sich anmelden, bevor Sie etwas einbinden können.",signup:"Anmelden",signupUrl:"/web/en/login",register:"Registrieren",registerUrl:"/web/en/login?p_p_id=58&p_p_lifecycle=1&p_p_state=maximized&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=1&saveLastPath=0&_58_struts_action=%2Flogin%2Fcreate_account"},StartView:{text:"Sie können die gerade von Ihnen erzeugte Kartenansicht auf einer Webseite einbinden.",touLink:"Zeige die Nutzungsbedingungen für eingebundene Karten",layerlist_title:"Kartenebenen, die eingebunden werden können",layerlist_empty:'Die von Ihnen ausgewählten Kartenebenen können nicht eingebunden werden. Das Menü "Ausgewählte Kartenebenen" zeigt an, ob eine Kartenebene eingebunden werden kann oder nicht.',layerlist_denied:"Kann nicht eingebunden werden",denied_tooltip:'Der Kartenanbieter hat keine Erlaubnis erteilt, diese Daten auf anderen Webseiten zu veröffentlichen. Prüfen Sie die Veröffentlichungsrechte im Menü "Ausgewählte Kartenebenen".',buttons:{"continue":"Fortfahren",continueAndAccept:"Nutzungsbedingungen akzeptieren und fortfahren",cancel:"Abbrechen",close:"Schließen"},tou:{notfound:"Nutzungsbedingungen können nicht gefunden werden",reject:"Verweigern",accept:"Akzeptieren"}}}}),Oskari.registerLocalization({lang:"de",key:"coordinatedisplay",value:{title:"",desc:"",display:{crs:{"EPSG:3067":"ETRS89-TM35FIN"},compass:{N:"N: ",E:"O: "}}}}),Oskari.registerLocalization({lang:"de",key:"maplegend",value:{title:"Legendenansicht",desc:"Zeige Legendenansicht"}}),Oskari.registerLocalization({lang:"de",key:"userinterface.UserGuide",value:{title:"Hilfe",desc:"",flyout:{title:"Paikkatietoikkuna Benutzerhandbuch"},tile:{title:"Kartennutzerhandbuch"},error:{title:"Fehler!",generic:"Fehler beim Laden des Benutzerhandbuchs. Bitte versuchen Sie es später noch einmal."},help:{tags:"map window,user guide",contentPart:"body"}}}),Oskari.registerLocalization({lang:"de",key:"FeatureData",value:{title:"Objektdaten",desc:"Sachdaten räumlicher Objekte",loading:"Wird geladen",showmore:"Anzeigen",nodata:"Die ausgewählten Kartenebenen beinhalten keine Sachdaten.",featureNameAll:"Datentyp",errorscale:"Die Daten können in dieser Maßstabsebene nicht angezeigt werden. Bitte wechseln Sie die Maßstabsebene.",errordata:"Die vom Server bereitgestellten Daten weisen Fehler auf. Bitte verschieben Sie die Karte leicht, um Sie zu aktualisieren.",columnSelectorTooltip:"Zeige Tabelle",popup:{title:"Wählen Sie ein Objekt auf der Karte",instructions:" ",link:{title:"Mehr auswählen"},button:{cancel:"Abbrechen",show:"Orte anzeigen",close:"Schließen",edit:"Bearbeiten"},tools:{point:{tooltip:"Punkt hinzufügen"},line:{tooltip:"Linie hinzufügen"},polygon:{tooltip:"Polygon hinzufügen"},square:{tooltip:"Rechteck hinzufügen"},circle:{tooltip:"Kreis hinzufügen"},select:{tooltip:"Objekte auswählen"}}}}}),Oskari.registerLocalization({lang:"de",key:"MyPlaces2",value:{title:"Orte",desc:"",category:{defaultName:"Meine Kartenebene",organizationnew:"Meine Orte",inspire:"Orte"},guest:{loginShort:"Melden Sie sich an, um den Dienst zu nutzen"},tools:{point:{tooltip:"Punkt hinzufügen","new":"Punkt durch Klicken auf die Karte hinzufügen.",next:"Speichern oder weitere Punkte hinzufügen.",edit:"Bewegen Sie den Punkt durch Anklicken und Ziehen.",save:"Punkt speichern"},line:{tooltip:"Linie hinzufügen","new":'Fügen Sie eine Linie ein, indem Sie auf die Karte klicken, um Stützpunkte hinzuzufügen. Sie beenden das Zeichnen durch einen Doppelklick oder durch einen Klick auf "Zeichnen beenden".',next:"Speichern oder weitere Linien hinzufügen.",edit:"Bearbeiten Sie die Linie, indem Sie die Stützpunkte anklicken und verschieben.",save:"Linie speichern"},area:{tooltip:"Fläche hinzufügen","new":'Fügen Sie eine Fläche ein, indem Sie auf die Karte klicken, um Stützpunkte hinzuzufügen. Sie beenden das Zeichnen durch einen Doppelklick oder durch einen Klick auf "Zeichnen beenden". Um Löcher in Flächen zu erzeugen, halten Sie die ALT-Taste gedrückt.',next:"Speichern oder weitere Flächen hinzufügen.",edit:"Bearbeiten Sie die Fläche, indem Sie die Stützpunkte anklicken und verschieben.",save:"Fläche speichern"}},buttons:{ok:"OK",cancel:"Abbrechen",finish:"Zeichnen beenden",save:"Speichern",movePlaces:"Orte verschieben und löschen",deleteCategory:"Löschen",deleteCategoryAndPlaces:"Kategorien und Orte löschen",changeToPublic:"Öffentlich machen",changeToPrivate:"Nicht öffentlich machen"},placeform:{title:"Ortsdaten",tooltip:'Ein Ort, der auf der Karte positioniert wurde, wird unter "Meine Orte" gespeichert. Geben Sie dem Ort einen Namen und beschreiben Sie ihn. Sie können die Kartenebene auswählen auf der der Ort gespeichert wird oder eine neue Ebene unter "Neue Ebene", im Drop-Down Menü der Kartenebenen, auswählen.',placename:{placeholder:"Geben Sie dem Ort einen Namen"},placelink:{placeholder:"Fügen Sie eine URL hinzu"},placedesc:{placeholder:"Beschreiben Sie den Ort"},category:{label:"Kartenebene","new":"Neue Ebene..."}},categoryform:{name:{label:"Name",placeholder:"Geben Sie der Kartenebene einen Namen"},drawing:{label:"Darstellung",point:{label:"Punkt",color:"Farbe",size:"Größe"},line:{label:"Linie",color:"Farbe",size:"Linienstärke"},area:{label:"Fläche",fillcolor:"Füllfarbe",linecolor:"Linienfarbe",size:"Linienstärke"}},edit:{title:"Kartenebene bearbeiten",save:"Speichern",cancel:"Zurück"}},notification:{placeAdded:{title:"Der Ort wurde gespeichert",message:'Der Ort kann unter "Meine Daten" gefunden werden'},categorySaved:{title:"Kartenebene gespeichert",message:"Änderung in der Kartenebene gespeichert"},categoryDelete:{title:"Kartenebene löschen",deleteConfirmMove:"Kartenebene {0} beinhaltet {1} Objekt/e. Möchten Sie die Kartenebene löschen und die Orte zur Standardkartenebene {2} verschieben?",deleteConfirm:"Karteneben {0} löschen?",deleted:"Kartenebene gelöscht"},categoryToPublic:{title:"Kartenebene öffentlich machen",message:"Sie machen die Kartenebene {0} öffentlich. Sie können Links zu einer öffentlichen Kartenebene mit anderen Internetnutzern teilen oder die Kartenebene in ein Kartenfenster auf einer anderen Webseite einbinden. Andere Nutzer können ebenfalls die Kartenebene betrachten."},categoryToPrivate:{title:"Kartenebene nicht veröffentlichen",message:"Sie machen die Kartenebene {0} nicht öffentlich. Damit ist es nicht mehr möglich, sie mit anderen Nutzern zu teilen oder auf anderen Webseiten einzubinden. Andere Nutzer können die Kartenebene nicht länger betrachten."},error:{addCategory:"Die Kartenebene konnte nicht gespeichert werden. Der Ort wurde nicht gespeichert.",editCategory:"Die Kartenebene konnte nicht gespeichert werden..",savePlace:"Der Ort konnte nicht gespeichert werden.",title:"Fehler!",generic:"Systemfehler! Bitte versuchen Sie es später noch einmal.",deleteCategory:"Fehler beim Löschen!",deleteDefault:"Die Standardkartenebene kann nicht gelöscht werden."}},validation:{title:"Daten sind fehlerhaft:",placeName:"Ortsname fehlt.",categoryName:"Name der Kartenebene fehlt.",placeNameIllegal:"Der Ortsname enthält unzulässige Zeichen. Erlaubte Zeichen sind die Buchstaben a-z, å, ä, ö sowie Zahlen, Bindestriche und die Backspace-Taste.",descIllegal:"Die Beschreibung enthält unzulässige Zeichen. Erlaubte Zeichen sind die Buchstaben a-z, å, ä, ö sowie Zahlen, Bindestriche und die Backspace-Taste.",categoryNameIllegal:"Die Ebenenbeschreibung enthält unzulässige Zeichen. Erlaubte Zeichen sind die Buchstaben a-z, å, ä, ö sowie Zahlen, Bindestriche und die Backspace-Taste.",dotSize:"Die Punktgröße liegt außerhalb der Größenbeschränkung (1-5).",dotColor:"Falsche Punktfarbe.",lineSize:"Die Linienstärke liegt außerhalb der Größenbeschränkung (1-50).",lineColor:"Falsche Linienfarbe.",areaLineSize:"Die Linienstärke liegt außerhalb der Größenbeschränkungen (0-50).",areaLineColor:"Falsche Farbe der Flächenränder.",areaFillColor:"Falsche Füllfarbe."}}}),Oskari.registerLocalization({lang:"de",key:"GuidedTour",value:{button:{next:"Weiter",previous:"Zurück",start:"Start",finish:"Ende",close:"Schließen"},title:"Willkommen",desc:"Führung durch Paikkatietoikkuna",tourseen:{label:"Diese Meldung nicht erneut anzeigen"},page1:{title:"Willkommen bei Paikkatietoikkuna",message:"Wenn Sie Paikkatietoikkuna zum ersten Mal nutzen, wird Ihnen unsere Kurzanleitung den Start erleichtern."},page2:{title:"Suche",message:"Nutzen Sie die Suchfunktion, um im Kartenausschnitt zum gesuchten Ort zu navigieren.",openLink:"Suche anzeigen",closeLink:"Suche verbergen",tileText:"Suche"},page3:{title:"Kartenebenen",message:"Sie können die Datenprodukte auswählen, die auf der Karte angezeigt werden sollen, indem Sie die Kartenebenen markieren. Klicken Sie auf eine Kategorie, um sie zu öffnen und wählen Sie eine Ebene aus. Oder geben Sie einige Buchstaben Ihres Suchbegriffs in das Suchfeld ein.",openLink:"Zeige Kartenebenen",closeLink:"Verberge Kartenebenen",tileText:"Kartenebenen"},page4:{title:"Ausgewählte Kartenebenen",message:"Sie können die Reihenfolge, in der die Kartenebenen angezeigt werden, durch Anklicken und Verschieben verändern. Die Transparenz der Kartenebenen kann angepasst werden. Die Veränderungen werden im Kartenfenster angezeigt.",openLink:"Zeige ausgewählte Kartenebenen",closeLink:"Verberge ausgewählte Kartenebenen",tileText:"Ausgewählte Kartenebenen"},page5:{title:"Meine Daten",message:"Alle von Ihnen auf der Karte markierten Orte, Ihre gespeicherten Kartenansichten und eingebundenen Karten werden angezeigt, wenn Sie sich angemeldet haben.",openLink:'Zeige "Meine Daten"',closeLink:'Verberge "Meine Daten"',tileText:"Meine Daten"},page6:{title:"Karte erzeugen",message:"Sie können ganz einfach Ihre selbsterzeugte Karte auf Ihrer Webseite einbinden. Hierfür müssen Sie nur die Größe sowie die Benutzeroberfläche Ihrer Karte definieren. Kopieren Sie eine Zeile HTML-Code in Ihre Webseite.",openLink:'Zeige "Karte erzeugen"',closeLink:'Verberge "Karte erzeugen"',tileText:"Karte erzeugen"},page7:{title:"Werkzeuge",message:"Verwenden Sie die Werkzeuge, um Orte hinzuzufügen, eine Kartenansicht zu speichern, einen Link zu einer Kartenansicht weiterzugeben oder um zu einer vorherigen Kartenansicht zurückzukehren. Halten Sie den Mauszeiger für kurze Zeit über ein Werkzeug, um weitere Informationen zu erhalten."},page8:{title:"Kartenansicht verschieben",message:"Sie können den Kartenausschnitt durch Anklicken und Ziehen verschieben oder die Verschiebe-Funktion nutzen. Durch Klicken der mittleren Schaltfläche der Verschiebe-Funktion kehren Sie zur Standardansicht zurück. Tipp: Sie können den Kartenausschnitt ebenfalls mit den Pfeiltasten Ihrer Tastatur verschieben."},page9:{title:"Herein- und Herauszoomen",message:"Sie können die Karte vergrößern und verkleinern, indem Sie die Maßstabs-Scrollbalken oder die Plus- und Minustaste neben dem Scrollbalken verwenden. Tipp: Sie können die Karte ebenfalls mit Hilfe der Plus- und Minustasten auf der Tastatur vergrößern und verkleinern. Oder Sie vergrößern die Karte indem Sie doppelt darauf klicken. Zusätzlich können Sie das Mausrad verwenden, um zu zoomen."}}}),Oskari.registerLocalization({lang:"de",key:"Printout",value:{title:"Kartenansicht drucken",flyouttitle:"Kartenansicht drucken",desc:"",btnTooltip:"Drucken",BasicView:{title:"Kartenansicht drucken",name:{label:"The name of the map",placeholder:"required",tooltip:"Give your map a descriptive name. Please note the language of the user interface."},language:{label:"Sprache",options:{fi:"Finnisch",sv:"Schwedisch",en:"Englisch",de:"Deutsch",es:"Spanisch",cs:"Tschechisch"},tooltip:"Select the language of the map interface and map data."},size:{label:"Größe",tooltip:"Wählen Sie das Druck-Layout. Die Vorschau wird entsprechend aktualisiert.",options:[{id:"A4",label:"A4 Hochformat",classForPreview:"preview-portrait",selected:!0},{id:"A4_Landscape",label:"A4 Querformat",classForPreview:"preview-landscape"},{id:"A3",label:"A3 Hochformat",classForPreview:"preview-portrait"},{id:"A3_Landscape",label:"A3 Querformat",classForPreview:"preview-landscape"}]},preview:{label:"Vorschau",tooltip:"Klicken Sie auf die Vorschau, um eine vergrößerte Ansicht zu erhalten.",pending:"Die Vorschau wird in Kürze aktualisiert",notes:{extent:"Die Vorschau kann verwendet werden, um die Größe des Druckbereichs festzustellen.",restriction:"Es werden nicht alle Kartenebenen in der Vorschau angezeigt."}},buttons:{save:"Ausdruck erstellen",ok:"OK",cancel:"Abbrechen"},location:{label:"Ort und Zoomstufe",tooltip:"Der Maßstab des Ausdrucks entspricht dem der Karte im Browser.",zoomlevel:"Zoomstufe"},settings:{label:"Weitere Einstellungen",tooltip:"Geben Sie weitere Einstellungen ein: Format, Titel und Maßstab"},format:{label:"Format",tooltip:"Dateiformat auswählen",options:[{id:"png",format:"image/png",label:"PNG-Bild"},{id:"pdf",format:"application/pdf",selected:!0,label:"PDF-Dokument"}]},mapTitle:{label:"Titel hinzufügen",tooltip:"Fügen Sie der Karte einen Titel hinzu"},content:{options:[{id:"pageLogo",label:"Paikkatietoikkuna-Logo hinzufügen",tooltip:"Sie können das Logo bei Bedarf verbergen",checked:"checked"},{id:"pageScale",label:"Maßstab zur Karte hinzufügen",tooltip:"Maßstab zur Karte hinzufügen",checked:"checked"},{id:"pageDate",label:"Datum hinzufügen",tooltip:"Sie können dem Ausdruck ein Datum hinzufügen",checked:"checked"}]},legend:{label:"Legend",tooltip:"Select legend position",options:[{id:"oskari_legend_NO",loca:"NO",label:"No legend ",tooltip:"No legend plot",selected:!0},{id:"oskari_legend_LL",loca:"LL",label:"Left lower corner ",tooltip:"Legend position in left lower corner of print area"},{id:"oskari_legend_LU",loca:"LU",label:"Left upper corner ",tooltip:"Legend position in left upper corner of print area"},{id:"oskari_legend_RU",loca:"RU",label:"Right upper corner ",tooltip:"Legend position in right upper corner of print area"},{id:"oskari_legend_RL",loca:"RL",label:"Right lower corner ",tooltip:"Legend position in right lower corner of print area"}]},help:"Hilfe",error:{title:"Fehler",size:"Error in size definitions",name:"Name is required information",nohelp:"Keine Hilfe verfügbar",saveFailed:"Ausdrucken der Karte fehlgeschlagen. Bitte versuchen Sie es später noch mal.",nameIllegalCharacters:"The name contains disallowed characters. Allowed characters are the letters a-z as well as å, ä and ö, numbers, backspaces and hyphens."}},StartView:{text:"Sie können die gerade von Ihnen erzeugte Kartenansicht ausdrucken.",info:{maxLayers:"Sie können maximal 8 Kartenebenen gleichzeitg drucken.",printoutProcessingTime:"Das Ausdrucken nimmt etwas mehr Zeit in Anspruch, wenn mehrere Kartenebenen ausgewählt sind."},buttons:{"continue":"Weiter",cancel:"Abbrechen"}}}});