// Laden des Event-Inspectors
window.addEventListener('load', handleLoad);

function handleLoad() {

  // Installieren eines Listeners für Mausbewegungen
  document.querySelector('body')?.addEventListener('mousemove', handleMouseMoveEvent);

  // Installieren von Click- und Keyup-Listenern für body
  document.querySelector('body')?.addEventListener('click', handleClickEvent);
  document.querySelector('body')?.addEventListener('keyup', handleKeyupEvent);

   // Installieren von Click- und Keyup-Listenern für div0
  document.querySelector('div0')?.addEventListener('click', handleClickEvent);
  document.querySelector('div0')?.addEventListener('keyup', handleKeyupEvent);


   // Installieren von Click- und Keyup-Listenern für div1
  document.querySelector('div1')?.addEventListener('click', handleClickEvent);
  document.querySelector('div1')?.addEventListener('keyup', handleKeyupEvent);
}


function handleLoadEvent(event: Event) {
  // Laden der Informationen in die Info-Box
  setInfoBox();

  // Protokollieren des Ladeereignisses in der Konsole
  console.log('Event: Load');
  console.log('Event-Typ:', event.type);
  console.log('Ziel des Events:', event.target);
  console.log('Aktuelle Ziel des Events:', event.currentTarget);
  console.log('Event-Objekt:', event);
}

function handleMouseMoveEvent(event: MouseEvent) {                                        //Funktion MouseMove
  // Anzeigen der Mausposition und des Ziels in einem Span-Element
  const infoBox = document.getElementById('infoBox');
  infoBox.textContent = `Mausposition: ${event.clientX}, ${event.clientY}`;

  // Protokollieren des Mausbewegungsereignisses in der Konsole
  console.log('Event: MouseMove');
  console.log('Event-Typ:', event.type);
  console.log('Ziel des Events:', event.target);
  console.log('Aktuelle Ziel des Events:', event.currentTarget);
  console.log('Event-Objekt:', event);
}

function handleClickEvent(event: Event) {                                                   //Funktion Click
  // Setzen der Stilattribute top und left des Spans auf die Mausposition + Offset
  const infoBox = document.getElementById('infoBox');
  infoBox.style.top = `${event.clientY + 10}px`;
  infoBox.style.left = `${event.clientX + 10}px`;

  // Protokollieren des Klickereignisses in der Konsole
  console.log('Event: Click');
  console.log('Event-Typ:', event.type);
  console.log('Ziel des Events:', event.target);
  console.log('Aktuelle Ziel des Events:', event.currentTarget);
  console.log('Event-Objekt:', event);
}

function handleKeyupEvent(event: KeyboardEvent) {                                           //Funktion Keyup
  // Protokollieren des Keyup-Ereignisses in der Konsole
  console.log('Event: KeyUp');
  console.log('Event-Typ:', event.type);
  console.log('Ziel des Events:', event.target);
  console.log('Aktuelle Ziel des Events:', event.currentTarget);
  console.log('Gedrückte Taste:', event.key);
  console.log('Event-Objekt:', event);
}

function setInfoBox(_event:MouseEvent) {                                                                  //Funktion Infobox
  //Info-Box mit einer Nachricht
  let spanelement:HTMLSpanElement = document.querySelector('span');
  spanelement.innerText = Number (_event.clientX) +"px";
  spanelement.innerText =+ Number (_event.clientY) +"px";
 
  return spanelement;
}
