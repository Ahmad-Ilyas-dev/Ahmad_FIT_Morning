 const opDisplay = document.getElementById('operation');
        const resDisplay = document.getElementById('result');
        const toast = document.getElementById('toast');
        const toastMsg = document.getElementById('toast-msg');
        let currentInput = "";

        function showToast(msg) {
            toastMsg.innerText = msg;
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 2500);
        }

        function updateDisplay() {
            opDisplay.innerText = currentInput;
            if (currentInput === "") resDisplay.innerText = "0";
        }

        function handleInput(value) {
            if (value === 'DEL') value = 'Backspace';
            
            if (value === 'AC' || value === 'Escape') {
                currentInput = "";
                resDisplay.innerText = "0";
                opDisplay.innerText = "";
            } 
            else if (value === '=' || value === 'Enter') {
                if (currentInput.trim() === "") {
                    showToast("Input is empty! 🚫");
                    return;
                }
                try {
                    const finalResult = new Function('return ' + currentInput)();
                    resDisplay.innerText = Number.isInteger(finalResult) ? finalResult : finalResult.toFixed(4).replace(/\.?0+$/, "");
                    currentInput = resDisplay.innerText; 
                } catch {
                    showToast("Invalid Operation! ⚠️");
                }
            } 
            else if (value === 'Backspace') {
                currentInput = currentInput.slice(0, -1);
            } 
            else {
                if (currentInput.length < 16) currentInput += value;
            }
            updateDisplay();
        }

        document.querySelectorAll('.btn').forEach(btn => {
            btn.className += `
                h-14 flex items-center justify-center text-lg rounded-xl
                bg-[#1b1d21] text-gray-300 cursor-pointer transition-all duration-100
                shadow-[-4px_-4px_10px_rgba(255,255,255,0.05),4px_4px_10px_rgba(0,0,0,0.5)]
                active:shadow-[inset_-3px_-3px_8px_rgba(255,255,255,0.05),inset_3px_3px_8px_rgba(0,0,0,0.5)]
                active:scale-95 outline-none
            `;
            btn.addEventListener('click', () => handleInput(btn.innerText));
        });

        document.addEventListener('keydown', (e) => {
            const key = e.key;
            const allowed = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.','Enter','Backspace','Escape'];
            if (allowed.includes(key)) {
                e.preventDefault();
                handleInput(key);
                const btn = document.querySelector(`[data-key="${key}"]`);
                if (btn) {
                    btn.classList.add('scale-95', 'opacity-50');
                    setTimeout(() => btn.classList.remove('scale-95', 'opacity-50'), 100);
                }
            }
        });