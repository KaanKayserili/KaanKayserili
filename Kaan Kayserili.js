const latte = {
  "water": 350,
  "milk": 75,
  "coffee": 20,
  "money": 7,
  "cup": 1
}

const espresso = {
  "water": 250,
  "coffee": 16,
  "money": 4,
  "cup": 1
}

const cappuccino = {
  "water": 200,
  "milk": 100,
  "coffee": 12,
  "money": 6,
  "cup": 1
}

let machine = {
  "water": 400,
  "milk": 540,
  "coffee": 120,
  "money": 550,
  "cup": 9
}

function buy(deger) 
{
  let kahveTuru=deger.split(" ")[1]; //girilen komutun 2. kelimesi yani kahve türü
  let adet=parseInt(deger.split(" ")[2]); //girilen komutun 3. kelimesi yani miktarı

  if(adet>=1)
  {
    if(kahveTuru=="latte")
    {
      if(machine.coffee>=(latte.coffee*adet))
      {
        if(machine.milk>=(latte.milk*adet))
        {
          if(machine.water>=(latte.water*adet))
          {
            if(machine.cup>=(latte.cup*adet))
            {
              machine.coffee-=latte.coffee*adet;
              machine.milk-=latte.milk*adet;
              machine.water-=latte.water*adet;
              machine.cup-=latte.cup*adet;
              machine.money+=latte.money*adet;
        
              console.log(`I give you ${adet} ${kahveTuru}.`);
            }
            else
            {
              console.log("Sorry, not enough cup!");
            }
          }
          else
          {
            console.log("Sorry, not enough water!");
          }
        }
        else
        {
          console.log("Sorry, not enough milk!");
        } 
      }
      else
      {
        console.log("Sorry, not enough coffee!");
      }
    }
    else if(kahveTuru=="espresso")
    {
      if(machine.coffee>=(espresso.coffee*adet))
      {
          if(machine.water>=(espresso.water*adet))
          {
            if(machine.cup>=(espresso.cup*adet))
            {
              machine.coffee-=espresso.coffee*adet;
              machine.water-=espresso.water*adet;
              machine.cup-=espresso.cup*adet;
              machine.money+=espresso.money*adet;
        
              console.log(`I give you ${adet} ${kahveTuru}.`);
            }
            else
            {
              console.log("Sorry, not enough cup!");
            }
          }
          else
          {
            console.log("Sorry, not enough water!");
          }
      }
      else
      {
        console.log("Sorry, not enough coffee!");
      }
    }
      
    else if(kahveTuru=="cappuccino")
    {
      if(machine.coffee>=(cappuccino.coffee*adet))
      {
        if(machine.milk>=(cappuccino.milk*adet))
        {
          if(machine.water>=(cappuccino.water*adet))
          {
            if(machine.cup>=(cappuccino.cup*adet))
            {
              machine.coffee-=cappuccino.coffee*adet;
              machine.milk-=cappuccino.milk*adet;
              machine.water-=cappuccino.water*adet;
              machine.cup-=cappuccino.cup*adet;
              machine.money+=cappuccino.money*adet;
        
              console.log(`I give you ${adet} ${kahveTuru}.`);
            }
            else
            {
              console.log("Sorry, not enough cup!");
            }
          }
          else
          {
            console.log("Sorry, not enough water!");
          }
        }
        else
        {
          console.log("Sorry, not enough milk!");
        } 
      }
      else
      {
        console.log("Sorry, not enough coffee!");
      }
    }
    else
    {
      console.log("You entered the wrong type of coffee!");
    }
  }
  else
  {
    console.log("The amount of coffee must be equal or greater than 1 !!!");
  }
}

function fill(deger) 
{
  let malzemeTuru=deger.split(" ")[1]; //girilen komutun 2. kelimesi yani malzeme türü
  let miktar=parseInt(deger.split(" ")[2]); //girilen komutun 3. kelimesi yani miktarı
  if(miktar>=1)
  {
    if(malzemeTuru=="water")
    {
      machine.water+=miktar;
      console.log(`Filling ${malzemeTuru} for ${miktar}`);
    }
    else if(malzemeTuru=="milk")
    {
      machine.milk+=miktar;
      console.log(`Filling ${malzemeTuru} for ${miktar}`);
    }
    else if(malzemeTuru=="coffee")
    {
      machine.coffee+=miktar;
      console.log(`Filling ${malzemeTuru} for ${miktar}`);
    }
    else if(malzemeTuru=="cup")
    {
      machine.cup+=miktar;
      console.log(`Filling ${malzemeTuru} for ${miktar}`);
    }
    else
    {
      console.log("You entered the material type incorrectly!");
    }
  }
  else
  {
    console.log("The amount of material must be greater than 0 !!!");
  }
}

function take() 
{
  if(machine.money>0)
  {
    console.log(`I gave you $${machine.money}`);
    machine.money=0;
  }
  else
  {
    console.log("Sorry, not enough money in the machine!");
  }
  
}

function remaining() 
{
  console.log("The coffee machine has:");
  console.log(`${machine.coffee} g coffee`);
  console.log(`${machine.milk} ml milk`);
  console.log(`${machine.water} ml water`);
  console.log(`${machine.cup} cups`);
  console.log(`$${machine.money} money`);
}

function start(Girdi) 
{
    let fonksiyonTuru=Girdi.split(" ")[0];//girilen komutun ilk kelimesi
  
    if (fonksiyonTuru == "buy") 
    {
      buy(Girdi);
    }
    else if (fonksiyonTuru == "fill") 
    {
      fill(Girdi);
    }
    else if (fonksiyonTuru == "take") 
    {
      take();
    }
    else if (fonksiyonTuru == "remaining") 
    {
      remaining();
    }
    else 
    {
      console.log("You made a mistake!");
    }
}

while(true){
  start(prompt());
}