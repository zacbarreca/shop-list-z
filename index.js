'use strict';

let list = $('.shopping-list');
let form = $('#js-shopping-list-form');

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

  list.on('click', '.shopping-item-toggle', function(){
    let listItem = $(this).closest('li');
    let item = listItem.find('.shopping-item');
    item.toggleClass('shopping-item__checked');
  });
}

list.on('click', '.shopping-item-delete', function(){
  let listItem = $(this).closest('li');
  listItem.remove();
});

$(handleClicks);
