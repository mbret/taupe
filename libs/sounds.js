(function(){
    'use strict';

    function playSound() {
        var a = new Audio('http://vaas.acapela-group.com/Services/Streamer.ogg?req_voice=antoine8k&req_text=hello world&cl_login=EVAL_VAAS&cl_app=EVAL_2267118&cl_pwd=rqdlg7j0');
        a.play();
    }

    function playChosedSound(page, mainCallback) {

        var obj = jsonfile.dialog;
        var adress = 'http://vaas.acapela-group.com/Services/Streamer.ogg?req_voice=';
        var text = '&req_text=';
        var log = '&cl_login=EVAL_VAAS&cl_app=EVAL_2267118&cl_pwd=rqdlg7j0';
        var toSay;

        for (var i = 0; i < obj.length; i++){
            // look for the entry with a matching `code` value
            if (obj[i].page == page){
                toSay = obj[i].texts;
            }
        }

        var plays = [];

        for (var i = 0; i < toSay.length; i++){

            (function(j){
                plays.push(function(cb){
                    console.log(j);
                    var voice = toSay[j].char;
                    var blabla = toSay[j].text;
                    var listvoice = jsonfile.voices;
                    var toHear;


                    for (var i = 0; i < listvoice.length; i++){
                        // look for the entry with a matching `code` value
                        if (listvoice[i].char == voice){
                            toHear = listvoice[i].voice;
                        }
                    }
                    var a = new Audio(adress + toHear +  text + blabla + log);
                    //var a = new Audio('http://vaas.acapela-group.com/Services/Streamer.ogg?req_voice=alice8k&req_text=Mais c"est degoutant&cl_login=EVAL_VAAS&cl_app=EVAL_2267118&cl_pwd=rqdlg7j0');
                    a.addEventListener("ended", function() { cb(); }, true);
                    a.play();
                });
            })(i);

        }

        async.series(plays,function(error){
            mainCallback();
        });
    }

    var jsonfile = {
        "voices": [
            {
                "char": "N",
                "voice": "margauxhappy8k"
            },
            {
                "char": "T",
                "voice": "antoine8k"
            },
            {
                "char": "PI",
                "voice": "bruno8k"
            },
            {
                "char": "CH",
                "voice": "claire8k"
            },
            {
                "char": "LI",
                "voice": "julie8k"
            },
            {
                "char": "CHE",
                "voice": "antoinesad8k"
            },
            {
                "char": "VA",
                "voice": "manon8k"
            },
            {
                "char": "CO",
                "voice": "margauxsad8k"
            },
            {
                "char": "MO",
                "voice": "alice8k"
            }
        ],

        "dialog": [
            {
                "page": "1",
                "texts": [
                    {
                        "char": "N",
                        "text": "Comme tous les soirs, la petite taupe sortit de terre son museau pointu, juste pour voir si le soleil avait disparu. Et voici ce qui arriva. C'etait rond et marron, aussi long qu'une saucisse, et le plus horrible fut que ca lui tomba exactement sur la tete, sploutsch !"
                    }
                ]
            },

            {
                "page": "2",
                "texts": [
                    {
                        "char": "T",
                        "text": "Mais c'est degoutant"
                    },
                    {
                        "char": "N",
                        "text": "rouspeta la petite taupe"
                    },
                    {
                        "char": "T",
                        "text": "qui a ose me faire ca sur la tete ?"
                    },
                    {
                        "char": "N",
                        "text": "Evidemment, personne ne repondit"
                    }
                ]
            },

            {
                "page": "3",
                "texts": [
                    {
                        "char": "T",
                        "text": "Dis donc le pigeon"
                    },
                    {
                        "char": "N",
                        "text": "glapit-elle"
                    },
                    {
                        "char": "T",
                        "text": "est-ce toi qui m'a fait sur la tete ?"
                    }
                ]
            },

            {
                "page": "4",
                "texts": [
                    {
                        "char": "PI",
                        "text": "Moi ? Mais non voyons ! Moi, je fais comme ca !"
                    },
                    {
                        "char": "N",
                        "text": "et splatsch ! un petit pate laiteux vint s'ecraser juste devant la petite taupe, et moucheta de blanc son pied droit"
                    }
                ]
            },

            {
                "page": "5",
                "texts": [
                    {
                        "char": "T",
                        "text": "He le cheval, est-ce toi qui m'as fait sur la tete ?"
                    }
                ]
            },

            {
                "page": "6",
                "texts": [
                    {
                        "char": "CH",
                        "text": "Moi ? Mais non voyons ! Moi, je fais comme ca !"
                    },
                    {
                        "char": "N",
                        "text": "Et pouf, pouf, pouf, pouf, pouf, il bombarda l'herbe de cinq gros crottins. La petite taupe fut drolement impressionnee"
                    }
                ]
            },

            {
                "page": "7",
                "texts": [
                    {
                        "char": "T",
                        "text": "Hola ! Le lievre ! est-ce toi qui m'as fait sur la tete ?"
                    }
                ]
            },

            {
                "page": "8",
                "texts": [
                    {
                        "char": "L",
                        "text": "Moi ? Mais non voyons ! Moi, je fais comme ca !"
                    },
                    {
                        "char": "N",
                        "text": "Et ratatatata ! Cinquante petits haricots tout ronds petarderent aux oreilles de la petite taupe"
                    }
                ]
            },

            {
                "page": "9",
                "texts": [
                    {
                        "char": "T",
                        "text": "Dis-moi la chevre ! est-ce toi qui m'as fait sur la tete ?"
                    }
                ]
            },

            {
                "page": "10",
                "texts": [
                    {
                        "char": "CHE",
                        "text": "Moi ? Mais non voyons ! Moi, je fais comme ca !"
                    },
                    {
                        "char": "N",
                        "text": "Et clang di clang di clang ! Un paquet de petits berlingots couleur chocolat degringolerent sur la prairie. La petite taupe les trouva fort gracieux, ma foi"
                    }
                ]
            },

            {
                "page": "11",
                "texts": [
                    {
                        "char": "T",
                        "text": "Reponds, la vache ! est-ce toi qui m'as fait sur la tete ?"
                    }
                ]
            },

            {
                "page": "12",
                "texts": [
                    {
                        "char": "VA",
                        "text": "Moi ? Mais non voyons ! Moi, je fais comme ca !"
                    },
                    {
                        "char": "N",
                        "text": "Et ssplaoutsch ! Une enorme bouse verdatre s'ecrabouilla mollement sur le sol. Diable ! pensa-t-elle, c'est une chance que cette chose-la ne me soit pas tombee sur la tete !"
                    }
                ]
            },

            {
                "page": "13",
                "texts": [
                    {
                        "char": "T",
                        "text": "Cochon, ecoute-moi ! est-ce toi qui m'as fait sur la tete ?"
                    }
                ]
            },

            {
                "page": "14",
                "texts": [
                    {
                        "char": "CO",
                        "text": "Moi ? Mais non voyons ! Moi, je fais comme ca !"
                    },
                    {
                        "char": "CO",
                        "text": "Et vlouf ! il envoya un petit tas brun et mou derriere lui. Beurk ! La petite taupe se boucha bien vite le nez."
                    }
                ]
            },

            {
                "page": "15",
                "texts": [
                    {
                        "char": "T",
                        "text": "Hep, vous ! Est-ce que"
                    },
                    {
                        "char": "N",
                        "text": "Commenca la petite taupe. Mais il n'y avait la que deux grosses mouches noires, qui faisaient bombance."
                    },
                    {
                        "char": "T",
                        "text": "Enfin !"
                    },
                    {
                        "char": "N",
                        "text": "pensa-t-elle"
                    },
                    {
                        "char": "T",
                        "text": "Voila des gens qui vont pouvoir me renseigner."
                    },
                    {
                        "char": "N",
                        "text": "Et elle chuchota:"
                    },
                    {
                        "char": "T",
                        "text": "Qui a bien pu me faire sur la tete, mesdames ?"
                    }
                ]
            },

            {
                "page": "16",
                "texts": [
                    {
                        "char": "N",
                        "text": "Les deux mouches n'hesiterent pas longtemps."
                    },
                    {
                        "char": "MO",
                        "text": "Aucun doute, ma chere, c'est un chien."
                    }
                ]
            },

            {
                "page": "17",
                "texts": [
                    {
                        "char": "N",
                        "text": "Cette fois, la taupe le tenait, le gros malpropre qui avait fait sur sa tete"
                    }
                ]
            },

            {
                "page": "18",
                "texts": [
                    {
                        "char": "N",
                        "text": "Jean Henri, le chien du boucher ! Sa vengeance allait etre terrible !"
                    }
                ]
            },

            {
                "page": "19",
                "texts": [
                    {
                        "char": "N",
                        "text": "D'un bond, la petite taupe sauta sur la niche de Jean Henri...."
                    }
                ]
            },

            {
                "page": "20",
                "texts": [
                    {
                        "char": "N",
                        "text": "Voila ! Justice etait faite !"
                    },
                    {
                        "char": "N",
                        "text": "Radieuse, la petite taupe, s'enfonca a nouveau dans les entrailles de la terre, la ou, assurement, personne au monde ne pouvait lui faire sur la tete."
                    }
                ]
            }
        ]
    };
    
    // Export library
    window.Sounds = {
        playSound: playSound,
        playChosedSound: playChosedSound
    }
    
})();