'use strict';

function handleClicks(){
  console.log('Hello world');
  let list = $('.shopping-list');
  let form = $('#js-shopping-list-form');

  form.submit(function(event){
    console.log('Hello world');
    event.preventDefault();
    
    let input = $('#shopping-list-entry');
    let entry = input.val();

    if (!entry){
      input.focus();
      return false;
    }

    input.val('');

    let newElement = `
    <li>
      <span class="shopping-item">${entry}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>
    `;

    list.append($(newElement));
  });
}

$(handleClicks);