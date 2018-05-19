var number = 0;
var total = 0;
wins = 0;
losses = 0;

$(document).ready(function () {

    function reset() {
        number = Math.floor(10 + (Math.random() * 50));
        total = 0;
        $("#number").html(number);
        $("#total").html(total);
        




        for (i = 0; i < 4; i++) {


            var random = Math.floor(1 + (Math.random() * 12));
            $("#crystal" + i).data("number", random);


            $("#crystal" + i).on("click", function () {
                
            ($(this).data("number"))


                
                total = total + $(this).data("number")
                $("#total").html(total);
                

                console.log("TOTAL IS: " + total)
                if (total === number) {
                    console.log("win")
                    wins++
                    alert("Woo! You get " + total + " drinks!");
                    reset();

                }

                if (total > number) {
                    losses++
                    console.log("loss")
                    alert("Sorry, you must have violated hidden bar etiquette. On the plus side, your liver is better off!")
                    reset();
                }


            });

        }
    }
    reset();

});
