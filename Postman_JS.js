// let myName = 'Paweł';

// console.log(myName + ' (wartość globalna!)');

// {
//     let myName = 'Patras';
//     console.log(`${myName} (wartość z bloku kodu!)`);
// }

// const myFunction = () => {  // funkcja strzałkowa, zamiast function() 
//     console.log('Moja pierwsza funkcja z opóźnionym zapłonem...');
// }

// function nauka(tech) {
//     console.log('Uczę się Postmana!');
//     setTimeout(myFunction, 5000);
//     console.log(tech + ' to prostszy język od Javy.');
// }

// nauka('Javascript');

// const substract = (a, b) => a - b;

// console.log(substract(50,110));


// const announceBreakfast = () => {
// 	console.log('Breakfast is ready!');
// }

// function makeBreakfast(callbackFunction) {
// 	console.log('Starting to make breakfast');
// 	setTimeout(callbackFunction, 5000);
// 	console.log('Serving coffee');
// }

// makeBreakfast(announceBreakfast);

//  <<Objects>>
//zamiast mozolnie tworzyć zmienne na temat jednej osoby:
// let firstName = 'Pawel';
// let lastName = 'Karnov';
// let age = 35;
// let isMarried = false;

//można utworzyć obiekt:
// const person = {
//     firstName: 'Pawel',
//     'second-name': 'Piotr', //wartości ze znakami specjalnymi w ''
//     lastName: 'Karnov',
//     age: 35,
//     isMarried: false,
//     sayHello: () => 'Hello,', //  <<dodanie metody do obiektu>>
//     //introduce: () => ' my name is ' + this.firstName    //wywołanie wartości z obiektu, nie działa w strzałkowej metodzie
//     introduce: function() {return ' my name is ' + this.firstName}  //jedyna możliwość, klasyczna funkcja + return
// }

// person.email = 'pk@yahoo.com';  //można dodawać dane do obiektu
// console.log(person);

// console.log(person.lastName);   //wywołanie jednej wartości z obiektu

// console.log(person.sayHello(), person.introduce()); //wywołanie metody

// console.log(person['second-name']); //wywoływanie wartości specjalno-znakowych, bez kropki i []

// <<JSON.parse i JSON.stringify - zamiana na JSON i z JSON na JS, wbudowane metody JS>>

// const person = {
//     firstName: 'Pawel',
//     lastName: 'Karnov',
//     age: 35,
//     isMarried: false
// }

// let json = JSON.stringify(person);  //zamiana na json
// let personNew = JSON.parse(json);   //zamiana json na JS

// console.log(json);
// console.log(personNew);

//      <<Postman tests>>

// pm. to obiekt w postmanie
// console.log(pm.response.text());
// console.log(JSON.parse(pm.response.text()));
// console.log(pm.response.json());

// const response = pm.response.json();

// //	<< pierwszy test asercji >>
// pm.test('Status is UP', () => {
//     pm.expect(response.status).to.eql('UP');
// }); 
// console.log(response.status);


//  << Arrays >>

// const person = [
//     {
//         firstName: 'Pawel',
//         lastName: 'Karnov',
//         age: 35,
//         isMarried: false,
//         hobbies: ['running', 'yoga', 'sailing']
//     },
//     {
//         firstName: 'Jan',
//         lastName: 'Nowak',
//         age: 23,
//         isMarried: true,
//         hobbies: ['hiking', 'fishing', 'camping']
//     },
//     {
//         firstName: 'Zbyszek',
//         lastName: 'Kowal',
//         age: 54,
//         isMarried: false,
//         hobbies: ['binge', 'eating', 'sleeping']
//     }
// ];

// console.log(person.length);


//  << Built in methods of arrays >>
//.push, .shift, .slice, .pop

//let a = [1, 2, 3];
//a.push(4);
//a.shift(0);
//a.pop();
//console.log(a.slice(-1));   // slice tworzy tymczasową tablicę nie modyfikując oryginalnej
//a.push(a.shift());
//console.log(a);


//	<<Response body assertion >>

// pm.test('Status code is 200', () => {
//     pm.response.to.have.status(200);
// });

// const response = pm.response.json();	//inicjalizacja zmiennej przed testami wymagajacymi jej

// pm.test('Response is an object', () => {
//     pm.expect(response).to.be.an('object');
// });

// pm.test('Product name', () => {
//     pm.expect(response.name).to.be.a('string');
// });

// pm.test('Product price', () => {
//     pm.expect(response.price).to.be.a('number');
// });

// pm.test('Product is in stock', () => {
//     pm.expect(response.inStock).to.eql(true);
//     pm.expect(response.inStock).to.be.true;
// });

// pm.test('Error message',() => {
//     pm.expect(response.error).to.to.have.string("Invalid value for query parameter 'category'.");	//fragment odpowiedzi, jeśli jest bardzo długi
// });

// pm.test('Error message',() => {
//     const expectedError = ("Invalid value for query parameter 'results'. Must be greater than 0.");	//zadeklarowanie błędu jako zmiennej
//     pm.expect(response.error).to.to.have.eql(expectedError);
// });

//
//const response = pm.response.json();
//console.log(response[0].Item01.Data[0].Results[0].Contact.Address.PostalCode);  // szukanie elementu


//  << Setting variables from tests >>
//Ustalanie zmiennych w kolekcjach przyjęło się robić w testach. Ułatwia, przyspiesza to wykonywanie testów.

// pm.test('Status code is 200', () => {
//     pm.response.to.have.status(200);
// });

// const name = 'Pawel';
// pm.collectionVariables.set('firstName', name);

// //
// pm.test('Response has valid cart id', () => {
//     pm.expect(response).to.be.an('object');
//     pm.expect(response).to.haveOwnProperty('cartId');
//     pm.expect(response.cartId).to.be.a('string');
//     pm.collectionVariables.set('cartId', response.cartId);
// });

//
// pm.test('Status code is 201', () => {
//     pm.response.to.have.status(201);
// });

// const response = pm.response.json();

// pm.test('Order was created', () => {
//     pm.expect(response).to.be.an('object');
//     pm.expect(response.created).to.be.true;
//     pm.expect(response.orderId).to.be.a('string');
//     pm.collectionVariables.set('orderId', response.orderId);
// });

// pm.test('Status code is 200', () => {
//     pm.response.to.have.status(200)
// });

// const response = pm.response.json();

// pm.test('Error message contains the deleted order id.', () => {
//     pm.expect(response).to.haveOwnProperty('error');
//     pm.expect(response.error).to.contain(pm.collectionVariables.get('orderId'));    //contain, fragment odpowiedzi
// });

// console.log(pm.collectionVariables.get('orderId'));

//  ZAWSZE UŻYWAĆ TRIPLE EQUALITY SIGN! '==='
// console.log(21 > 20);
// console.log(21 === '21');
// console.log(21 == '21');
// console.log('Pawel' === 'Patryk');
// console.log('Pawel' == 'Patryk');

// '===' strict equality, ten najlepiej używać
// '==' loose equality, daje nieprzewidziane wyniki

//  << Pętle!!! >>

/*
for (initialization; condition; afterthought) {
    statement;
}
*/

// for (let i=1; i<=10; i++) {
//     console.log(i);
//     console.log('Hola!');
// };

// 
// let numbers = [2, 5, 7, 15, 23, 30];    // tablica z numerami

// for (let i=0; i < numbers.length; i++) {
//     console.log(numbers[i]);    // można dopisywać numery do tablicy, pojawią się w tej pętli
// }

//  <<if conditionals - instrukcje warunkowe >>

// let age = 15;
// if (age >= 18) {
//     console.log('You are an adult.');
// } else {
//     console.log('You are under age.');
// };

// szukanie ostatniego zamówienia poprzez variable kolekcji
// const response = pm.response.json();
// console.log('Last order was:', pm.collectionVariables.get('orderId'));

// for (let i = 0; i<response.length; i++) {
//     if (response[i].id === pm.collectionVariables.get('orderId')) {
//         console.log('Found it!');
//     }
// }

//wersja test
// const response = pm.response.json();

// pm.test('Created order is on the list', () => {
//     for (let i = 0; i<response.length; i++) {
//         if (response[i].id === pm.collectionVariables.get('orderId')) {
//             console.log('Found it!');
//         }
//     }
// });


// Powyższy test jest bezużyteczny, ponieważ zamiast zmiennej 'orderId', można podstawić inną liczbę i test będzie pozytywny. Trzeba dodać asercję:

// pm.test('Created order is on the list', () => {
//     const response = pm.response.json();
//     let isOrderIdInResponse = false;    // inicjalizacja asercji
//     for (let i = 0; i<response.length; i++) {
//         if (response[i].id === pm.collectionVariables.get('orderId')) {
//             console.log('Found it!');
//             isOrderIdInResponse = true; //zmiana wartości na true, ponieważ znaleziono orderId
//         }
//     }
//     pm.expect(isOrderIdInResponse).to.be.true;  //teraz test będzie prawidłowy
// });

// << forEach >>

//let numbers = [1,3,5,7,9,11];
//numbers.forEach((numer, index, array) => console.log(numer, index, array)); 
//numer,index,array można nadać inne nazwy

// test z metodą .forEach
// pm.test('Created order is on the list', () => {
//     const response = pm.response.json();
//     let isOrderIdInResponse = false;    // inicjalizacja asercji
//     response.forEach((order) => {
//         console.log(order);
//         if (order.id === pm.collectionVariables.get('orderId')) {
//             console.log('Found it!');
//             isOrderIdInResponse = true;
//         }
//     });
//      pm.expect(isOrderIdInResponse).to.be.true;
// });


// << .find >>
// const person = [
//     {
//         firstName: 'Pawel',
//         lastName: 'Karnov',
//         age: 35,
//         isMarried: false,
//         hobbies: ['running', 'yoga', 'sailing']
//     },
//     {
//         firstName: 'Jan',
//         lastName: 'Nowak',
//         age: 23,
//         isMarried: true,
//         hobbies: ['hiking', 'fishing', 'camping']
//     },
//     {
//         firstName: 'Zbyszek',
//         lastName: 'Kowal',
//         age: 54,
//         isMarried: false,
//         hobbies: ['binge', 'eating', 'sleeping']
//     }
// ];

// let someone = person.find((person) => person.age > 25);
// console.log(someone);
// if  (someone) {
//     console.log(someone.age);
// }

// console.log(typeof person); // typeof  - sprawdzenie typu zmiennej


// wyszukanie order za pomocą metody .find w Postmanie
// pm.test('Created order is on the list', () => {
//     const response = pm.response.json();
//     let order = response.find((order) => order.id === pm.collectionVariables.get('orderId'));
//     pm.expect(order).to.be.an('object');
//     console.log(order);
//     console.log(pm.collectionVariables.get('orderId'));
// });


//Pre-request script:
// function getRandomNumber(maxValue) {
//     return Math.floor(Math.random() * maxValue);
// }
// pm.collectionVariables.set('randomQuantity', getRandomNumber(14));

//  << Warunek, który określa środowisko >>
// if (pm.environment.name === 'Testing') {
//     pm.test('Status code is 400', () => {
//     pm.response.to.have.status(400);
//     });

//     const response = pm.response.json();

//     pm.test('Error message',() => {
//         const expectedError = ("Invalid value for query parameter 'results'. Must be greater than 0.");
//         pm.expect(response.error).to.to.have.eql(expectedError);
//     });    
// };


//  << Funkcja array.map - zmienia właściwości objektów w tablicy
// const persons = [
//     {
//         name: 'Jamie',
//         email: 'jamie@example.com'
//     },
//     {
//         name: 'Jake',
//         email: 'jake@example.com'
//     },
//     {
//         name: 'Mary',
//         email: 'mary@example.com'
//     }
//  ];
 
//  console.log(persons.map(person => person.email));

//

// const array1 = [1, 4, 9, 16];
// // Pass a function to map
// const map1 = array1.map((x) => x * 2);

// console.log(map1);  //tworzy nową tablicę 'map1'
// // Expected output: Array [2, 8, 18, 32]
// console.log(array1);
// console.log(map1);

//  << LEPSZA METODA DLA TESTÓW >>
// Jeśli request nie będzie zawierał JSON(np. 400 Bad Request), tylko jakiś tekst, wtedy nie zadziałają testy z powodu "const respone = pm.response.json();". W takim wypadku lepiej tak pisać testy:

// pm.test('Status code is 200', () => {
//     pm.response.to.have.status(200);
// });

// let response;   // definiujemy zmienną, bez inicjalizacji

// pm.test('Board is created', () => {
//     response = pm.response.json();  // dopiero wewnątrz testu inicajlizuję
//     pm.expect(response.name).to.eql('Learning Postman ' + pm.collectionVariables.get('boardNumber'));
//     pm.expect(response.closed).to.be.false;
//     console.log('Created board name:', response.name);
//     console.log('Created board id:', response.id);
//     pm.collectionVariables.set('boardId', response.id);
// });

// pm.test('Board is private', () => {
//     pm.expect(response.prefs.permissionLevel).to.eql('private');
// });

//  <<Headers & cookies

//This is how you retrieve a header from the response:
//pm.response.headers.get('X-Cache') 
//and in a test:
//Header exists: pm.response.to.have.header(X-Cache'); 
//Header has value: pm.expect(pm.response.headers.get('X-Cache')).to.eql('HIT'); 
// In a similar fashion you can test cookies as well.
// Cookie exists:
// pm.expect(pm.cookies.has('sessionId')).to.be.true; 
// Cookie has value:
//pm.expect(pm.cookies.get('sessionId')).to.eql(’ad3se3ss8sg7sg3'); 