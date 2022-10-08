document.addEventListener('DOMContentLoaded', () => {
//minimum
//1 Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, 
//кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
    // 1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
    // 2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
    let shoppingList = [
        {name: 'Гречка', value: 2, buy: true, price: 60, sum: 120},
        {name: 'Макарони', value: 5, buy: false, price: 25, sum: 125},
        {name: 'М`ясо', value: 2, buy: true, price: 90, sum: 180},
        {name: 'Сир', value: 1, buy: false, price: 100, sum: 100},
        {name: 'Батон', value: 1, buy: false, price: 25, sum: 25}
    ];
//1
    function shoppingListInfo(array){
        console.log('Список продуктів: ');
        array.forEach(e => {
            if(e.buy == false){
                console.log(e.name);
            }
        });
        array.forEach(e => {
            if(e.buy != false){
                console.log(e.name);
            }
        });
    }
    shoppingListInfo(shoppingList);
    console.log(' ');

//2
    function shoppingListBuyItem(array, name){
        console.log('Список продуктів: ');
        for (let key of shoppingList){
            if (key.name == name){
                key.buy = true;
            } 
        }
        return array.forEach(e => {
                console.log(e.name, e.buy);
        });
    }
    shoppingListBuyItem(shoppingList, 'Батон');  
    console.log(' ');
//normal
//1 Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
    function shoppingListDelItem(array){
        let delItem = prompt('Який товар Ви хочете видалити зі списку?');
        let num;
        for (let i = 0; i < array.length; i++){
            if (array[i].name === delItem){
                num = i;
                break;
            }
    }
    if (!isNaN(num)){
        let newArray = array.slice();
        newArray.splice(num, 1);
        return newArray;
      } else {
        return `Товар відсутній у списку`;
      }
    };
    console.log(shoppingListDelItem(shoppingList));
    console.log(' ');

//2 Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість
// в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів
// стало 2, то сума буде 24.
    function shoppingListAdditem(array){
        let addItem = prompt('Введіть товар який хочете додати');
        let addValue = +prompt('Введіть кількість товару');
        for(let i = 0; i < array.length; i++){
            if(array[i].name.toLowerCase() === addItem.toLowerCase()){
                array[i].value += addValue;
                array[i].sum = (array[i].price * array[i].value);
                return array;
            }
        }
         if(array[i].name != addItem){
                let addPrice = +prompt('Введіть ціну за товар (1шт)');
                let addSum = addPrice * addValue;
                array.push(
                    newItem = {
                        name: addItem,
                        value: addValue,
                        buy: false, 
                        price: addPrice,
                        sum: addSum
                    }
                );
                return array;
            }
            else return 'error';
    }
    console.log(shoppingListAdditem(shoppingList));
    console.log(' ');

//maximum
//1 Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
    function shoppingListSum(array){
        let sumItem = 0;
        for(let i = 0; i < array.length; i++){
            sumItem += array[i].sum;
        }
        return sumItem;
    }
    console.log(`Сума усіх продуктів в списку: ${shoppingListSum(shoppingList)}`);

//2 Підрахунок суми всіх (не) придбаних продуктів.
    function shoppingListSumNotBuying(array){
        let sumNotBuying = 0;
            array.forEach(e => {
                if(e.buy == false){
                   sumNotBuying += e.sum;
                }
            });
            return sumNotBuying;
    }
    console.log(`Сума всіх не придбаних продуктів: ${shoppingListSumNotBuying(shoppingList)}`);
    console.log(' ');
//3 Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає).
    function shoppingListMinMax(array, value){
        if(value == 0){
            return array.sort(function(a, b){
                return a.sum - b.sum;
            });
        }
        else if(value == 1){
            return array.sort(function(a, b){
                return b.sum - a.sum;
            });
        }
        else return '0 or 1';
    }
    console.log(shoppingListMinMax(shoppingList, 0));
});