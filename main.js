let count = 0; // viariable

        function updateCounter() {
            if (count < 90) { //counts only to 90 
                count++; //increase the count by 1

                document.getElementById('number').textContent = count; //show the current number "change the id number"
                setTimeout(updateCounter, 1000); // one second to the next number, stops when it reaches 90 
            }
        }
        updateCounter();