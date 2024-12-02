

$(document).ready(function () {

    $('#btn').click(function () {

        var inputvalue = $('#input').val();

        if (inputvalue) {

            $('#ul_div').append('<li> <span class= "value" >' + inputvalue + ' </span>  ' + '<button class = "completed_btn">Completed</button> <button class = "edit_btn" >Edit</button> <button class = "remove_btn">Remove</button></li>')
            $('#input').val('');
        }

        // Completed Button

        $('#ul_div').on('click', '.completed_btn', function () {

            $(this).parent().toggleClass('completed')

        });


        // Remove Button


        $('#ul_div').on('click', '.remove_btn', function () {

            $(this).parent().remove()
        })



        // Edit Button

        $('#ul_div').on('click', '.edit_btn', function () {

            var $value = $(this).siblings('.value')

            var now = $value.text();

           
            if($value){
                var newValue = prompt('Editting Your Task')
                $value.text(newValue)
            }

            


        })






    })




})