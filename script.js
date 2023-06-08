//initialize variables
let draggedItem = null;
let resetMessage = document.getElementById('resetMessage');
let revertMessage = document.getElementById('revertMessage');
let completionMessage = document.getElementById('completionMessage');

//create function for reset button

function reset() {
    // Clear the second container
    var container2 = document.getElementById('container2');
    container2.innerHTML = '<h2>Container 2</h2>';
    
    // Reset the first container to its original state
    var container1 = document.getElementById('container1');
    container1.innerHTML = '<h2>Container 1</h2>';
    
    // Populate the first container with initial items
    var initialItems = ['Item 1', 'Item 2', 'Item 3'];
    initialItems.forEach(function(itemText) {
      var item = document.createElement('div');
      item.className = 'item';
      item.draggable = true;
      item.textContent = itemText;
      container1.appendChild(item);
    });
    resetMessage.textContent = 'Now container 1 is on its original state';
    resetMessage.style.display = 'block';
    // display completion message for 2.5 seconds
    setTimeout(function(){
        resetMessage.style.display = 'none';
    },2500);
  }
  
//functions for dragging and dropping
  document.addEventListener('dragstart', function(event) {
    draggedItem = event.target;
    event.target.classList.add('dragging');
  });
  
  document.addEventListener('dragend', function(event) {
    event.target.classList.remove('dragging');
  });
  
  document.addEventListener('dragover', function(event) {
    event.preventDefault();
  });
  

  document.addEventListener('drop', function(event) {
    event.preventDefault();
    
    if (event.target.classList.contains('container')) {
        event.target.appendChild(draggedItem);
      if (event.target.id === 'container2') {
          event.target.appendChild(draggedItem);
    // Display message of dragging
        completionMessage.textContent = 'Item dropped into Container 2';
        completionMessage.style.display = 'block';
    // display completion message for 2 seconds
        setTimeout(function() {
            completionMessage.style.display = 'none';
        }, 2000);
    }
    else if (event.target.id === 'container1') {
        event.target.appendChild(draggedItem);
        revertMessage.textContent = 'Item reverted to Container 1';
        revertMessage.style.display = 'block';
        
        setTimeout(function() {
          revertMessage.style.display = 'none';
        }, 2000);
      }
    }
  });
  