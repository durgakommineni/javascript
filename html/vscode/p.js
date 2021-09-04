function prime(a){
    let i=2;
    let c=1;
    while(c<=a)
    {
    var count=0;
    for ( j = 2 ; j <i ; j++ )
    {
     if ( (i % j) == 0 )
     {
     count=count+1;
     }
     }
     if (count==0 ) {
     console.log(i);
     c++;
     }
     i++;
    }
    }
    prime(10);