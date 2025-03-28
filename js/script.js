 $(document).ready(function () {
            const $outputScreen = $('#outputscreen');

            function display(number) {
                let currentVal = $outputScreen.val();
                if (currentVal === '0') {
                    $outputScreen.val(number);
                } else {
                    $outputScreen.val(currentVal + number);
                }
            }

            function calculate() {
                try {
                    let result = eval($outputScreen.val());
                    if (isNaN(result) || result === Infinity || result === -Infinity) {
                        throw new Error("Invalid expression");
                    }
                    $outputScreen.val(result);
                } catch (err) {
                    alert("Invalid expression");
                    $outputScreen.val('Error');
                }
            }

            function clearScreen() {
                $outputScreen.val('');
            }

            function del() {
                let currentValue = $outputScreen.val();
                $outputScreen.val(currentValue.slice(0, -1) || '0');
            }

            $('.number-button').click(function () {
                display($(this).text());
            });

            $('#equals').click(function () {
                calculate();
            });

            $('#clear').click(function () {
                clearScreen();
            });

            $('#del').click(function () {
                del();
            });

            $('#percent').click(function () {
                display('%');
            });

            $('#divide').click(function () {
                display('/');
            });

            $('#multiply').click(function () {
                display('*');
            });

            $('#minus').click(function () {
                display('-');
            });

            $('#plus').click(function () {
                display('+');
            });

            $('#decimal').click(function () {
                let currentVal = $outputScreen.val();
                if (!currentVal.includes('.')) {
                    display('.');
                }
            });
        });
   