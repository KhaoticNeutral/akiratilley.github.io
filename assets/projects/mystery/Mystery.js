var loc = "entrance"
var prompt_content = "Good evening detective, You have made it to Blacktooth Manor, the door hangs open for you to enter the manor, or you can enter the Garden. /please type house or garden/"
var valid_input = []
const inventory = []
var reset_input
//end of surrondings variables

var input = null;

var loop_count = 0

//Intro to the game
alert("How to play: This is a text based rpg. Type in the provided space where you would like to go or what you would like to interact with to gather information about the murder thats taken place in the manor");
alert("Items and people you are able to interact with will be marked with / /,  to interact with an object simply type the item or person")

alert("Your phone rings as it hangs on your wall, eyes sluggishly open, you feel yourself get up and walk towards the phone as your conciousness catches up, a soft panicked voice 'Hi Detective Dawson, sorry to call you so late, er, early, but we've recived a call for a murder at Blacktooth Manor, you know where that is hun?' you grunt as Detective Moore continues 'Perfect, well I'll meet you there, another late one but we'll be ok bear' with a sigh and a coat you slink into your car. ");
alert(" 'Welcome Detective!' Moore greets you with a cup of coffee you nod your thanks 'What happened here?' she sighs 'Mr Blacktooth has been murdered, first name Anges, Mrs Blacktooth, Edith, found him in the lounge this morning, the butler was the second to see it, victim seems to have been stabbed with a sharp object' the two of you have made it to the entrance of the manor while chatting 'Good luck Detective I'll be here if you need anything' " )

function main() {
    console.log("main call")
    while (true) {
        loop_count++
        if (loop_count == 1000){  // emergency exit in case an infinite loop starts
            break
        }
        console.log("begin loop")

        reset_input = true
        if (loc == "entrance") {
            console.log("at entrance")

            if (input == "garden" || input == "foyer") {
                loc = input
            }
            else {
                prompt_content = "Good evening detective, You have made it to the entrance of Blacktooth Manor, infront of you stands the /foyer/ of the Manor and to the side of the house is the /garden/"
                reset_input = false
            }

            valid_input = ["garden", "foyer"]
        }
        else if (loc == "garden") {
            console.log("at garden")

            if (input == "gardener") {
                alert("You walk up to the gardener 'evening Detective' greeting back you ask him what he knows, he shrugs 'I wasn't working that day, I was at home, though I did over hear Mr and Mrs Blacktooth arguing for the past couple days over infidelity or finances I'm unsure, one things for certain though the house has grown awefully quiet. It's a shame it is, and he was going to finally financially succeed, what a shame");
            }
            else if (input == "rock") {
                alert("You pick up the rock and under it is a note, the note reads:  Dear Edith I'm sorry for accusing you of stealing out of the treasury, it turned out to be that the accountant had miscalculated our finances, I reacted poorly, It has just been so awfully stressful with the lack of work I've been receiving, but I believe that this trip will have set us for life, I have had a discussion with one of my friends and there is a great business opportunity arising that will keep us out of the poor house. Have you found all the admirer letters un the house? It's off putting that I keep finding them. Yours Truly Anges");
            }
            else if (input == "foyer") {
                loc = input
            }else if(input == "moore") {
                alert("You walk up to detetctive Moore to ask what she's found 'Everything is filthy in this shed don't you think?")
            }
            else {
                prompt_content = "You walk into the side of the house, infront of you is a well kept garden, there stands the /gardener/ racking leaves, looking around you, you see rocks placed as decoration though one /rock/ seems out of place. Following the path you see a back door that leads into the /foyer/ Detective /Moore/ is peering into the shed"
                reset_input = false
            }

            valid_input = ["gardener", "rock", "foyer","moore"]
        }
        else if (loc == "foyer") {
            console.log("at foyer")

            if (input == "butler") {
                alert("You walk up to the butler and ask what he knows he sighs and states 'I live on the property so I was one of the first to see the tradegy, he was found in the lounge with what we can assume is a knife wound, in his' the butler clears his throat 'Jugular, Mrs Blacktooth screamed and thats what called me up from my quaters to investigate'. 'Why do you live on the property Mr-' the butler continues 'Harrison, pleased to make your acquantance Detetctive Daweson, I live on the property for when Mr Blacktooth leaves for buissness trips, it's a shame he was murdered the day that he arrived home, he's been trying to find a new buissness idea after his last failed' before you could ask further he excuses himself");
            }else if(input == "moore"){
                alert("Walking up to Moore she bends to look at the stairs 'There is a trace of old dirt on these floors, I dont think the maid has gotten around to it, but seeing how nervous she is this must've happened before she came into work today' "  )
            }
            else if (input == "accuse") {
                valid_input = ["butler", "maid", "widow", "gardener"]

                while(!valid_input.includes(input)) {
                    input = prompt("Who do you think it was detective? The stoic butler, the franetic maid, the friendly gardener, or the heartbroken widow?").toLowerCase()
                }

                if (input == "butler") {
                    alert("You call everyone to the foyer, gather all your evidence to comfront the butler since he was here that night, he snarls and does not dignify you with an answer, you cuff him and he is sent off, as he is driven away and you are about to leave, you trip over a string and fall into a pike, it was not the butler")
                }
                else if (input == "maid") {
                    alert("You call everyone into the foyer, gather all your evidence to confront the maid, she stumbles over her words as she tries to explain herself, you shake your head and place her under arrest, as she is driven off, a saw decapitates you, it was not the maid ")
                }
                else if (input == "widow") {
                    alert("You call everyone into the foyer, gather all your evidence to accuse Mrs Blacktooth, she stares at you with anger 'I have loved Agnes since the day I met him detective you are out of proportion to believe it was me!' as you present the evidence you feel cold metal enter your side, it was not the widow")
                }
                else if (input == "gardener") {  // correct answer
                    alert("You call everyone into the foyer, gather all your evidence and accuse the gardener, that he had murdered Mr Blacktooth because he was in love with Mrs Blacktooth and when she did not meet him on that fateful night he murdered Mr Blacktooth as he was on his way home, he used the garden Sheers 'I did it for love, and I will hurt anyone who gets in my way' he attempts to attack you but with your quick wit you capture him, Good job detective!")
                }

                break
            }
            else if (input == "kitchen" || input == "bedroom" || input == "lounge" || input == "garden") {
                loc = input
            } 
            else {
                prompt_content = "You are now standing in the foyer of the Manor, infront of you is a case of stairs that leads to the /bedroom/, to your right is the /lounge/, to the left of you is the /kitchen/ and next to the starcase is a backdoor leading to the /garden/. /Moore/ stands by the staircase. You decide that once you are ready you will /accuse/ the suspect in this room."
                reset_input = false
            }

            valid_input = ["butler","moore", "accuse", "kitchen", "bedroom", "lounge", "garden"]
        }
        else if (loc == "kitchen") {
            console.log("at kitchen")

            if (input == "maid") {
                alert("with a warm but weak smile 'Evening detective' greeting back you ask about what shes seen 'Oh detective it was terrible, I was on my way in and there it was! Mr Blacktooth, What a tragic occurance, the ambulance hadn't arrived yet, have you spoken to the gardener yet?' deciding you would rather keep your information to yourself you decide to move on the conversation 'What time did you come in thid morning?' she laughs nervously 'I was in about 6am this morning as I am every morning' she seems anxious you choose to give her some space.")
                if (!inventory.includes("shears")){
                    alert(" Before you could step out of the kitchen the maid stops you 'could you pass by him and give him his shears? Strange for them to be so clean' with a nod you head to hand the gardener back his shears, he thanks you, a bit confused 'Miah was always such a considerate person, Mr Blacktooth was always a bit harsh with her' you walk back into the kitchen ")
                    inventory.push("shears")
                }
            }else if (input == "moore"){
                alert("Moore is looking at the impressive size of the kitchen 'Everything is so cleaned and organized in this room, my mother's kitchen looked just like this whenever she was under stress")
            }
            else if (input == "foyer") {
                loc = input
            
            }
            else {
                prompt_content = "You walk into a rather large kitchen, by the sink stands the /maid/, she is polishing knives, she spots you and seems a bit frantic. Behind you is the /foyer/, /Moore/ seems to be snooping in the drawers"
                reset_input = false
            }

            valid_input = ["maid", "foyer","moore"]
        }
        else if (loc == "lounge") {
            if (input == "notebook") {
                if(!inventory.includes("knife")) {
                    alert("You pull the notebook off the shelf and a knife falls to the ground, it has the initals EB carved into the blade of the knife, the knife was recently cleaned")
                    inventory.push("knife")
                }
                else {
                    alert("This is where you found the recently cleaned knife")
                }
            }else if(input == "moore"){
                alert(" 'It's strange the same dirt thats on the carpet was on the staircase' ")
            }
            else if (input == "foyer") {
                loc = input
            }
            else {
                prompt_content = "You walk into the lounge, youre still able to see some scuff of blood on the carpet, where Mr Blacktooth was murdered, though on closer inspection it seems that he might've been dragged here, looking at the bookcase there is a /notebook/ out of place. Behind you is the /foyar/. /Moore/ is inspecting the carpet quiet closely"
                reset_input = false
            }

            valid_input = ["notebook", "foyer", "moore"]
        }
        else if (loc == "bedroom") {
            if (input == "jewellery box") {
                alert("You gaze into the Jewllery Box, you spot a ring that looks like Mr Blacktooths wedding ring, upon closer inspection it looks a bit scuffed, like it had been dragged over rock, taking the ring out of the jewllery box you see that the inside is carved 'I have never loved someone more than you'")
            }
            else if (input == "mirror") {
                if (!inventory.includes("note")) {
                    alert("Out of irritation, you straighten the mirror. A note falls to the ground along with a couple petols, you look to Mrs Blacktooth, she gazed down at the petals 'Ah another note from my secrete admirer, I hope that was the last. You gesture to open it and she shrugs. It's crudely written and addressed to Mrs Blacktooth: 'Dearest Edith, your hair is like silk and your voice is strong, I can't understand why you tolerate staying with that man, please meet me outside at midnight to hear me out'. The note is signed: 'With love from your secret admirer' You ask Mrs Blacktooth if she knows who the admirer is, she shakes her head 'All I know is that he always puts diffrent flowers petols in it' ")
                    inventory.push("note")
                }
                else {
                    alert("This is the mirror where you found the note from Mrs Blacktooth's 'secret admirer'")
                }
            }else if(input == "moore"){
                alert("'I found some other notes in this box, theres quiet a few, and the flower choices seem deliberate, theres red and red tulips, what colour did you find in that note?' you look at the note in your hand you see the flower petals of an orange lilly")
            }
            else if (input == "widow") {
                alert("You try to ask Mrs Blacktooth questions but she blankly ignores you, she is in another world, you are not here to her")
            }
            else if (input == "foyer") {
                loc = input
            }
            else {
                prompt_content = "You walk into the main bedroom where Mrs Blacktooth - the picture of a decrepit /widow/ - sits by the window,. You attempt to greet her but she doesn't seem to notice you're there. You see a /jewellery box/ on her table and a /mirror/ that sits skew on the wall. Outside this room are the stairs to the /foyar/. /Moore/ is searching through a box she found next to the bed"
                reset_input = false
            }

            valid_input = ["jewellery box", "mirror", "widow", "foyer","moore"]
        }
        
        input = null
        if (reset_input) {
            continue
        }
        
        console.log("begin input for " + valid_input)
        while(!valid_input.includes(input)) {
            input = prompt(prompt_content).toLowerCase()

            console.log("input " + input + " vs valid " + valid_input + " res " + (valid_input.includes(input)))
        }
    }

    console.log("end loop")
}

main()
