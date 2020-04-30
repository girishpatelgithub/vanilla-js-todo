let ul          = document.getElementById('list'),
    add         = document.getElementById('add'),
    removeAll   = document.getElementById('removeAll');
    inputText   = document.getElementById('inputText');

add.onclick = () => {
    addLi(ul);
};

let addLi =  (targetUI) => {
    let text            = inputText.value,
        li              = document.createElement('li'),
        textNode        = document.createTextNode(`${text} `),
        removeButton    = document.createElement('button');
    
    inputText.value = '';

    if(text === '') {
        alert('Please enter some text' );
        return false;
    }

    removeButton.className      = 'removeMe';
    removeButton.innerHTML      = 'Done! ';
    removeButton.setAttribute('onclick', 'removeMe(this);');

    li.appendChild(textNode);
    li.appendChild(removeButton);

    targetUI.appendChild(li);
}

let removeMe = (item) =>{
    let parent = item.parentElement;
    parent.parentElement.removeChild(parent);
};

removeAll.onclick = () => {
    ul.innerHTML = '';
};