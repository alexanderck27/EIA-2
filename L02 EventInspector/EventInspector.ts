namespace L02_EventInspector {
  
    window.addEventListener("load", handleLoad);// Event-Listener für Laden des Fensters - aufruf handleLoad
  
    
    function handleLoad(_event: Event): void { // handleLoad wird aufgerufen
      
      
      document.addEventListener("mousemove", setInfoBox); //Event-Listener für Mausbewegungen - Funktion setinfobox
  
       
      document.addEventListener("click", logInfo);    // Event-Listener für Mausklicks - Funktion loginfo
      document.addEventListener("keyup", logInfo);  // Event-Listener für Taste - Funktion logInfo
  
      document.body.addEventListener("click", logInfo); //Evet-Listener für Mausklicks - Funktion loginfo aufrufen
      document.body.addEventListener("keyup", logInfo); //Event-Listener für Taste - Funktion logInfo aufrufen
  
    
      document.body.addEventListener("click", logInfo);  //Event-Listener für Mausklicks - Funktion loginfo aufrufen
      document.body.addEventListener("keyup", logInfo);  //Event-Listener für Taste - Funktion loginfo aufrufen
  
      //Event-Listener für HTML-Elemente div0 und div1 und Funktion logInfo
      let div0:HTMLElement = <HTMLElement>document.getElementById("div0");
      let div1:HTMLElement = <HTMLElement>document.getElementById("div1");

      div0.addEventListener("click", logInfo);
      div1.addEventListener("keyup", logInfo);
  
      // vent-Listener für HTML-Element Button und Funktion customEvent aufruft
      let button:HTMLElement = <HTMLElement>document.querySelector("button");

      button.addEventListener("click", customEvent);
    }
  
    function customEvent() {
      
      let customEvent = new CustomEvent("hallo"); //Event  "hallo"
       
      let button:HTMLElement = <HTMLElement>document.querySelector("button"); //HTML-Button-Element führt zu benutzerdefiniertem Event
      button.dispatchEvent(customEvent)
    
      document.addEventListener("hallo", <EventListener> helloFunction)  // Event-Listener für "hallo" macht Funktion helloFunction
    }
  
   
    function helloFunction(_event:CustomEvent) { // Funktion helloFunction wenn Ereignis "hallo"
      
      console.log(_event);//Ausgabe
    }
  
    //Funktion setInfoBox bei Mausbewegung 
    function setInfoBox(_event: MouseEvent): void {
      let x: number = _event.pageX;
      let y: number = _event.pageY;
  
      
      let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span"); //Erstes Span-Element auf der Seite auswählen
      span.style.left = x + 10 + "px"
      span.style.top = y + 10 + "px"
      span.innerHTML = "mousposition: " + x + " " + y + " " + "target: " + _event.target;
    }
  
    
    function logInfo(_event: MouseEvent | KeyboardEvent): void { // Funktion logInfo" sowie eine Maus- oder Tastaturereingabe
      console.log(_event);//Konsole
      console.log(_event.type);
      console.log(_event.currentTarget);
      console.log(_event.target);
    }
  }
  