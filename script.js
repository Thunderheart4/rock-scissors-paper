let p1=true
let p2=false
let p1_c=null
let p2_c=null
let text=document.querySelector('.info')
let c1=document.querySelector('.choice-player-1')
let c2=document.querySelector('.choice-player-2')

document.addEventListener('keydown', function(c){
    if(p1==true && p2==false){
        if(c. code=='KeyA'){
            console.log('rock')
            p1_c='rock'
            text.innerHTML='Player 2 turn'
            p1=false
            p2=true
        }
        else if(c. code=='KeyS'){
            console.log('scissors')
            p1_c='scissors'
            text.innerHTML='Player 2 turn'
            p1=false
            p2=true
        }
        else if(c. code=='KeyD'){
            console.log('paper')
            p1_c='paper'
            text.innerHTML='Player 2 turn'
            p1=false
            p2=true
        }
    }

    if(p1==false && p2==true){
        if(c. code=='KeyJ'){
            console.log('rock')
            p2_c='rock'
            p2=false
            setTimeout(show_choice, 1000)
            setTimeout(finish, 2000)
        }
        else if(c. code=='KeyK'){
            console.log('scissors')
            p2_c='scissors'
            p2=false
            setTimeout(show_choice, 1000)
            setTimeout(finish, 2000)
        }
        else if(c. code=='KeyL'){
            console.log('paper')
            p2_c='paper'
            p2=false
            setTimeout(show_choice, 1000)
            setTimeout(finish, 2000)
        }
    }
})

function show_choice(){
    if(p1_c=='rock'){
        c1.style.background='url(rock.jpg)'
        c1.style.backgroundSize='100%'
    }else if(p1_c=='scissors'){
        c1.style.background='url(scis.jpeg)'
        c1.style.backgroundSize='100%'
    }else if(p1_c=='paper'){
        c1.style.background='url(paper.jpg)'
        c1.style.backgroundSize='100%'
    }

    if(p2_c=='rock'){
        c2.style.background='url(rock.jpg)'
        c2.style.backgroundSize='100%'
    }else if(p2_c=='scissors'){
        c2.style.background='url(scis.jpeg)'
        c2.style.backgroundSize='100%'
    }else if(p2_c=='paper'){
        c2.style.background='url(paper.jpg)'
        c2.style.backgroundSize='100%'
    }
}

function finish(){
    if(p1_c==p2_c){
        alert('Tie')
    }else if(p1_c=='rock' && p2_c=='scissors'){
        alert('Player 1 won')
    }else if(p1_c=='scissors' && p2_c=='paper'){
        alert('Player 1 won')
    }else if(p1_c=='paper' && p2_c=='rock'){
        alert('Player 1 won')
    }else{
        alert('Player 2 won')
    }
}