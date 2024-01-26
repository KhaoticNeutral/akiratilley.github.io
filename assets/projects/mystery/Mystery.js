var loc = "entrance"
var prompt_content = "Good evening detective, You have made it to Blacktooth Manor, the door hangs open for you to enter the manor, or you can enter the Garden. /please type house or garden/"
var valid_input = []
const inventory = []
var reset_input
//end of surrondings variables

var input = null;

var loop_count = 0

//Intro to the game
alert("How to play, This is a text based rpg. Type in the provided space where you would like to go or what you would like to interact with to gather information about the murder thats taken place in the manor /If you would like to go back to the entrance hall please type house/");

alert("Welcome to Darktooth Manor, there has been a great murder here and you are here to solve it, good luck detective. ");

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

            if (input == "garden" || input == "house") {
                loc = input
            }
            else {
                prompt_content = "Good evening detective, You have made it to Blacktooth Manor, the door hangs open for you to enter the manor, or you can enter the Garden. /please type house or garden/"
                reset_input = false
            }

            valid_input = ["garden", "house"]
        }
        else if (loc == "garden") {
            console.log("at garden")

            if (input == "gardener") {
                alert("You walk up to the gardener 'evening Detective' greeting back you ask him what he knows, he shrugs 'I wasn't working that day, I was at home, though I did over hear Mr and Mrs Blacktooth arguing for the past couple days over infidelity or finances I'm unsure, one things for certain though the house has grown Awefully quiet /type 'house' to go back inside, if you have found all you need/");
            }
            else if (input == "rock") {
                alert("You pick up the rock and under it is a note, the note reads:  Dear Edith I'm sorry for accusing you of stealing out of the treasury, it turned out to be that the accountant had miscalculated our finances, I reacted poorly, It has just been so awfully stressful with the lack of work I've been receiving, but I believe that this trip will have set us for life, I have had a discussion with one of my friends and there is a great business opportunity arising that will keep us out of the poor house. Yours Truly Agnes");
            }
            else if (input == "house") {
                loc = input
            }
            else {
                prompt_content = "You walk into the side of the house, infront of you is a well kept garden, there stands the Gardener racking leaves, looking around you, you seen rocks placed as decoration though one seems out of place. There's also a door into the house."
                reset_input = false
            }

            valid_input = ["gardener", "rock", "house"]
        }
        else if (loc == "house") {
            console.log("at house")

            if (input == "butler") {
                alert("You walk up to the butler and ask what he knows he sighs and states 'I live on the property so I was one of the first to see the tradegy, he was found in the lounge with what we can assume is a knife wound, in his' the butler clears his throat 'Jugular, Mrs Blacktooth screamed and thats what called me up from my quaters to investigate'");
            }
            else if (input == "accuse") {
                valid_input = ["butler", "maid", "widow", "gardener"]

                while(!valid_input.includes(input)) {
                    input = prompt("Who do you think it was detective? The stoic butler, the frenetic maid, the friendly gardener, or the heartbroken widow?").toLowerCase()
                }

                if (input == "butler") {
                    alert("You gather all your evidence to comfront the butler since he was here that night, he snarls and does not dignify you with an answer, you cuff him and he is sent off, as he is driven away and you are about to leave, you trip over a string and fall into a pike, it was not the butler")
                }
                else if (input == "maid") {
                    alert("You gather all your evidence to confront the maid, she stumbles over her words as she tries to explain herself, you shake your head and place her under arrest, as she is driven off, a saw decapitates you, it was not the maid ")
                }
                else if (input == "widow") {
                    alert("You gather all your evidence to accuse Mrs Blacktooth, she stares at you with anger 'I have loved Agnes since the day I met him detective you are out of proportion to believe it was me!' as you present the evidence you feel cold metal enter your side, it was not the widow")
                }
                else if (input == "gardener") {  // correct answer
                    alert("You gather all your evidence and accuse the gardener, that he had murdered Mr Blacktooth because he was in love with Mrs Blacktooth and when she did not meet him on that fateful night he murdered Mr Blacktooth as he was on his way home, he used the garden Sheers 'I did it for love, and I will hurt anyone who gets in my way' he attempts to attack you but with your quick wit you capture him, Good job detective!")
                }

                break
            }
            else if (input == "kitchen" || input == "bedroom" || input == "lounge" || input == "garden") {
                loc = input
            } 
            else {
                prompt_content = "You are now standing in the entrance hall of Blacktooth Manor, A butler greets you, as you look around you can see the entrance into the garden, stairs that leads to the bedroom, a kitchen, and a lounge. This is where you can accuse your suspect, if you're ready."
                reset_input = false
            }

            valid_input = ["butler", "accuse", "kitchen", "bedroom", "lounge", "garden"]
        }
        else if (loc == "kitchen") {
            console.log("at kitchen")

            if (input == "maid") {
                alert("with a warm but weak smile 'Evening detective' greeting back you ask about what shes seen 'Oh detective it was terrible, I was on my way in and there it was! Mr Blacktooth, What a tragic occurance, the ambulance hadn't arrived yet, have you spoken to the gardener yet?")
                if (!inventory.includes("shears")){
                    alert("'could you pass by him and give him his shears? Strange for them to be so clean' with a nod you head to hand the gardener back his shears")
                    inventory.push("shears")
                }
            }
            else if (input == "house") {
                loc = input
            }
            else {
                prompt_content = "You walk into a rather large kitchen, by the sink stands the maid, she is polishing knives, she spots you and seems a bit frantic. Behind you is the house proper"
                reset_input = false
            }

            valid_input = ["maid", "house"]
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
            }
            else if (input == "house") {
                loc = input
            }
            else {
                prompt_content = "You walk into the lounge, youre still able to see some scuff of blood on the carpet, where Mr Blacktooth was murdered, though on closer inspection it seems that he might've been dragged here, looking at the bookcase there is a notebook out of place. Behind you is the house proper."
                reset_input = false
            }

            valid_input = ["notebook", "house"]
        }
        else if (loc == "bedroom") {
            if (input == "jewellery box") {
                alert("You gaze into the Jewllery Box, you spot a ring that looks like Mr Blacktooths wedding ring, upon closer inspection it looks a bit scuffed in dirt")
            }
            else if (input == "mirror") {
                if (!inventory.includes("note")) {
                    alert("In an attempt to comfort Mrs Blacktooth, you straighten the mirror. A note falls to the ground. It's crudely written and addressed to Mrs Blacktooth: 'Dearest Edith, your hair is like silk and your voice is strong, I can't understand why you tolerate staying with that man, please meet me outside at midnight to hear me out'. The note is signed: 'With love from your secret admirer'")
                    inventory.push("note")
                }
                else {
                    alert("This is the mirror where you found the note from Mrs Blacktooth's 'secret admirer'")
                }
            }
            else if (input == "widow") {
                alert("You try to ask Mrs Blacktooth questions but she blankly ignores you, she is in another world, you are not here to her")
            }
            else if (input == "house") {
                loc = input
            }
            else {
                prompt_content = "You walk into the main bedroom where Mrs Blacktooth - the picture of a decrepit widow - sits by the window,. You attempt to greet her but she doesn't seem to notice you're there. You see a jewellery box on her table and a mirror that sits skew on the wall. Outside this room are the stairs to the house proper."
                reset_input = false
            }

            valid_input = ["jewellery box", "mirror", "widow", "house"]
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
