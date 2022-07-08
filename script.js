const inputValue = document.getElementById('input');
const tooltip = document.getElementById("myTooltip");

function generateString() {
   let pw = Math.random().toString(36).slice(2);
   pw = [...pw];
   
   let pw2 = Math.random().toString(36).toUpperCase().slice(2);
   pw2 = [...pw2];
   
   if (pw.length > pw2.length) {
      pw.length = pw2.length;
   } else {
      pw2.length = pw.length;
   }
   
   for(let i = 0; i < pw.length; i+=2) {
       pw.slice(i,1, pw2[i] );
   }
   
   pw = pw.join("");
   
   inputValue.value = pw;
}

function copyString()
{
   inputValue.select();
   inputValue.setSelectionRange(0, 99999);

   navigator.clipboard.writeText(inputValue.value);
   tooltip.innerHTML = "Copied: " + inputValue.value;
}

function outHover() {
   tooltip.innerHTML = "Copy to clipboard";
}