var resources = [
    {
        id: 'a',
        title: 'Doctor'
    },
    {
        id: 'b',
        title: 'Patient'
    }
];

var events = [
    {
        title: 'Samii',
        start: '2023-12-29T10:00:00',
        end: '2023-12-29T14:30:00',
        description: 'Appiontment',
        resourceId: 'b'
    },
    {
        title: 'Sidd',
        start: '2023-12-29T10:00:00',
        end: '2023-12-29T14:30:00',
        description: 'Lecture',
        resourceId: 'a',
    }
];

var calendarEl = document.getElementById("calendar");

var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'resourceTimeGridDay',
    resources: resources,
    allDaySlot: false,
    events: events,
    editable: true,
    eventOverlap: true,
    eventBackgroundColor: '#370003',
    eventTextColor: 'white',
    eventBorderColor: 'black',
});

calendar.render();

function changeView(view) {
    calendar.changeView(view);
}


function addEvent() {
        var eventName = document.getElementById('eventName').value;
        var eventStart = document.getElementById('eventStart').value;
        var eventEnd = document.getElementById('eventEnd').value;
         
    
        var newEvent = {
            title: eventName,
            start: eventStart,
            end: eventEnd,
            description: 'New Lecture',
            resourceId: 'a'
        };
         
        calendar.addEvent(newEvent);
         
    }
    

    function addEvent22() {
        var pName = document.getElementById('pName').value;
        var es = document.getElementById('es').value;
        var e1 = document.getElementById('e1').value;
        // var er = document.getElementById('er').value;
    
        var neww = {
            title: pName,   
            start: es,
            end: e1,
            description: 'New Lecture',
            resourceId: 'b'
            
        };
         
        calendar.addEvent(neww);
    }
 
    
function toggleEventForm() {
    var eventForm = document.getElementById('eventForm');
    eventForm.style.display = eventForm.style.display === 'none' ? 'block' : 'none';

}
function toggleform() {
    var eventt = document.getElementById('eventt');
    eventt.style.display = eventt.style.display === 'none' ? 'block' : 'none';

}