const fighters = document.querySelector( '#fighters_section').children;

console.log ( fighters );
for ( let index = 0; index < fighters.length; index +=1 ) {
    let fighter = fighters [ index ] ;
    fighter.addEventListener ( 'click', () => {
        removeExistingActivatedClass ( fighters );
        fighter.classList.add ( 'activated');
    });
    
}


function removeExistingActivatedClass ( fighters ) {
    for ( let index = 0; index < fighters.length; index +=1) {
        let fighter =fighters [ index ] ;
        fighter.classList.remove('activated');
    }
}
