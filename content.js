function highlightTitles() {
  const SHAPE = document.evaluate(
    '//*[@id="root"]/div/main/section[2]/div/section/div[2]/div[2]/div[1]/div/div[2]/span/span[2]',
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  if (!SHAPE) return;

  const shape_inUpper = SHAPE.textContent.toUpperCase();

  const Depth = document.querySelectorAll('[id^="searchResultTable_col_Depth_"]');
  const Ratio = document.querySelectorAll('[id^="searchResultTable_col_Ratio_"]');
  const Rap = document.querySelectorAll('[id^="searchResultTable_col_%Rap_"]');
  const Shade = document.querySelectorAll('[id^="searchResultTable_col_Shade_"]');

  // Depth Highlite 
  Depth.forEach((element) => {
    const str = element.textContent.replace('%', '');
    const value = parseFloat(str);
    const absValue = Math.abs(value);
    if (!shape_inUpper.includes("ROUND")){
      element.style.textAlign = 'center';
      element.style.fontWeight = "600";
      element.style.color = "#000000";
      element.style.border = '1px solid #ffffff';
      element.style.borderRadius = '5px';
    }

    if (shape_inUpper.includes("CUSHION")) {

      if (58 <= absValue && absValue <= 68.5) {
        element.style.backgroundColor = '#9adb8c';

      } else if (68.5 < absValue && absValue <= 70.5) {
        element.style.backgroundColor = '#ffc4c4';
        
      } else {
        element.style.backgroundColor = 'lightslategray';
      }

    } else if (shape_inUpper.includes("PRINCESS")) {

      if (68 <= absValue && absValue <= 75.5) {
        element.style.backgroundColor = '#9adb8c';

      } else if (75.5 < absValue && absValue <= 77) {
        element.style.backgroundColor = '#ffc4c4';
        
      } else {
        element.style.backgroundColor = 'lightslategray';
      }

    } else if (shape_inUpper.includes("RADIANT")) {

      if (60 <= absValue && absValue <= 69) {
        element.style.backgroundColor = '#9adb8c';

      } else if (69.1 <= absValue && absValue <= 69.7) {
        element.style.backgroundColor = '#ffc4c4';
        
      } else {
        element.style.backgroundColor = 'lightslategray';
      }

    } else if (shape_inUpper.includes("EMERALD")) {

      if (60 <= absValue && absValue <= 69.5) {
        element.style.backgroundColor = '#9adb8c';

      } else if ((55 <= absValue && absValue < 60) || (69.5 < absValue && absValue <= 72.5)) {
        element.style.backgroundColor = '#ffc4c4';
        
      } else {
        element.style.backgroundColor = 'lightslategray';
      }

    } else if (shape_inUpper.includes("OVAL")) {

      if (57.5 <= absValue && absValue <= 65.5) {
        element.style.backgroundColor = '#9adb8c';

      } else if ((55 <= absValue && absValue < 57.5) || (65.5 < absValue && absValue <= 67)) {
        element.style.backgroundColor = '#ffc4c4';
        
      } else {
        element.style.backgroundColor = 'lightslategray';
      }

    } else if (shape_inUpper.includes("PEAR")) {

      if (56.5 <= absValue && absValue <= 65.5) {
        element.style.backgroundColor = '#9adb8c';

      } else if ((65.6 <= absValue && absValue <= 67) || (55 <= absValue && absValue < 56.5)) {
        element.style.backgroundColor = '#ffc4c4';
        
      } else {
        element.style.backgroundColor = 'lightslategray';
      }

    } else if (shape_inUpper.includes("MARQUISE")) {

      if (56.5 <= absValue && absValue <= 65.5) {
        element.style.backgroundColor = '#9adb8c';

      } else if ((65.6 <= absValue && absValue <= 67) || (56 <= absValue && absValue < 56.5)) {
        element.style.backgroundColor = '#ffc4c4';
        
      } else {
        element.style.backgroundColor = 'lightslategray';
      }

    }
  });

  // Ratio Highlite 
  Ratio.forEach((element) => {
    const str = element.textContent.replace('%', '');
    const value = parseFloat(str);
    const absValue = Math.abs(value);
    if (!shape_inUpper.includes("ROUND")){
      element.style.textAlign = 'center';
      element.style.fontWeight = "600";
      element.style.color = "#000000";
      element.style.border = '1px solid #ffffff';
      element.style.borderRadius = '5px';
    }


    if (shape_inUpper.includes("CUSHION")) {

      if (1.00 <= absValue && absValue <= 1.09) {
        element.style.backgroundColor = '#9adb8c';

      } else if (1.10 <= absValue && absValue <= 1.15) {
        element.style.backgroundColor = '#ffc4c4';
        
      } else {
        element.style.backgroundColor = 'lightslategray';
      }

    } else if (shape_inUpper.includes("PRINCESS")) {

      if (1.00 <= absValue && absValue <= 1.03) {
        element.style.backgroundColor = '#9adb8c';

      } else if (1.04 <= absValue && absValue <= 1.05) {
        element.style.backgroundColor = '#ffc4c4';
        
      } else {
        element.style.backgroundColor = 'lightslategray';
      }

    } else if (shape_inUpper.includes("RADIANT")) {

      if (1.34 <= absValue && absValue <= 1.54) {
        element.style.backgroundColor = '#9adb8c';

      } else if ((1.30 <= absValue && absValue < 1.34) || (absValue > 1.54 && absValue <= 1.55)) {
        element.style.backgroundColor = '#ffc4c4';
        
      } else {
        element.style.backgroundColor = 'lightslategray';
      }

    } else if (shape_inUpper.includes("EMERALD")) {

      if (1.36 <= absValue && absValue <= 1.75) {
        element.style.backgroundColor = '#9adb8c';

      } else if (1.33 <= absValue && absValue < 1.36) {
        element.style.backgroundColor = '#ffc4c4';
        
      } else {
        element.style.backgroundColor = 'lightslategray';
      }

    } else if (shape_inUpper.includes("OVAL")) {

      if (1.36 <= absValue && absValue <= 1.55) {
        element.style.backgroundColor = '#9adb8c';

      } else if ((1.33 <= absValue && absValue < 1.36) || (1.55 < absValue && absValue <= 1.67)) {
        element.style.backgroundColor = '#ffc4c4';
        
      } else {
        element.style.backgroundColor = 'lightslategray';
      }

    } else if (shape_inUpper.includes("PEAR")) {

      if (1.53 <= absValue && absValue <= 1.70) {
        element.style.backgroundColor = '#9adb8c';

      } else if ((1.50 <= absValue && absValue < 1.53) || (1.70 < absValue && absValue <= 1.75)) {
        element.style.backgroundColor = '#ffc4c4';
        
      } else {
        element.style.backgroundColor = 'lightslategray';
      }

    } else if (shape_inUpper.includes("MARQUISE")) {

      if (1.85 <= absValue && absValue <= 2.15) {
        element.style.backgroundColor = '#9adb8c';

      } else if ((1.80 <= absValue && absValue < 1.85) || (2.15 < absValue && absValue <= 2.25)) {
        element.style.backgroundColor = '#ffc4c4';
        
      } else {
        element.style.backgroundColor = 'lightslategray';
      }

    }
  });

  // Rap Highlite 
  for( let element = 0 ; element <= (Rap.length - 1) ; element++){
    const str = Rap[element].textContent.replace('%', '');
    const value = parseFloat(str);
    const absValue = Math.abs(value);

    if (!shape_inUpper.includes("ROUND")){
      Rap[element].style.textAlign = 'center';
      Rap[element].style.fontWeight = "600";
      Rap[element].style.color = "#000000";
    }

    if (element + 1 < Rap.length) {
      const next_str = Rap[element + 1].textContent.replace('%', '');
      const next_value = parseFloat(next_str);
      const next_abs_Value = Math.abs(next_value);

      const differ = Math.round(Math.abs(next_abs_Value - absValue));
      if (differ >= 3) {
        console.log(next_abs_Value, ' - ', absValue, ' = ', differ);
        Rap[element].style.backgroundColor = '#e4a917a6';
        Rap[element].style.border = '1px solid #ffffff';
        Rap[element].style.borderRadius = '5px';
      }
    }
  }

  // Shade Highlite 
  Shade.forEach((element) => {
    element.style.textAlign = 'center';

    if (element.textContent.includes("None") || element.textContent.includes("-")){
      element.style.color = "#000000";
    }else{
      element.style.border = '1px solid #ffffff';
      element.style.borderRadius = '5px';

      if(element.textContent.includes('Mix') || element.textContent.includes('inch')){
        element.style.color = "#000000";
        element.style.backgroundColor = "#7a79791f";
        element.style.fontWeight = "600";  

      } else {
        element.style.backgroundColor = element.textContent;

      }
      
      if (element.textContent.includes("Yellow")){
        element.style.color = "#000000";
      }else{
        element.style.color = "#ffffff";
      }
    }
  });
  
}

function executeHighlighting() {
  highlightTitles();
}

document.addEventListener('click', executeHighlighting);

const observer = new MutationObserver((mutationsList, observer) => {
  executeHighlighting();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  characterData: true
});

highlightTitles(); 
