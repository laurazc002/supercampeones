import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/Interface/personaje';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  //Atributos = variables
  
  nombre:string = 'Laura';
  edad : number = 12;

  numeros:number[] = [1,2,3,4,5,6,7,8,9,10]

  img: any = 'https://firebasestorage.googleapis.com/v0/b/spotify-8664d.appspot.com/o/natalia-disco.jpg?alt=media&token=ec9a82a8-a553-4b7d-a1f2-f0b9ae41ad84'

//imagenes: any [] = ['https://firebasestorage.googleapis.com/v0/b/spotify-8664d.appspot.com/o/IBYBXI36GJD4XFGNFGY6SOBRMU.jpg?alt=media&token=6f8c3779-f364-405b-98a4-f1bf71add734','https://firebasestorage.googleapis.com/v0/b/spotify-8664d.appspot.com/o/JJSEMQZ4AJAJ5F37QTP3PUQ3RE.jpg?alt=media&token=b4fbf434-d9b2-43a9-bbdd-803bb46aa3bb','https://firebasestorage.googleapis.com/v0/b/spotify-8664d.appspot.com/o/PPTHBE6GJFB4BCUQGG6VM3XI6U.jpg?alt=media&token=a16ca458-00f6-4d87-9b20-c0b47f55ef49','https://firebasestorage.googleapis.com/v0/b/spotify-8664d.appspot.com/o/Supercampeones.jpg?alt=media&token=177a33d0-5e48-4f71-ab72-66f63f23d244']


personajes: Personaje[]=[

  {'nombre': 'Benji', 
    "edad": 12,
    "foto": 'https://firebasestorage.googleapis.com/v0/b/spotify-8664d.appspot.com/o/natalia-disco.jpg?alt=media&token=ec9a82a8-a553-4b7d-a1f2-f0b9ae41ad84'},

  {'nombre': 'Juan',
     "edad": 5, 
    "foto": 'https://firebasestorage.googleapis.com/v0/b/spotify-8664d.appspot.com/o/natalia-disco.jpg?alt=media&token=ec9a82a8-a553-4b7d-a1f2-f0b9ae41ad84'},

  {'nombre': 'Luis', 
    "edad": 7,
    "foto": 'https://firebasestorage.googleapis.com/v0/b/spotify-8664d.appspot.com/o/natalia-disco.jpg?alt=media&token=ec9a82a8-a553-4b7d-a1f2-f0b9ae41ad84'},

  {'nombre': 'Benji', 
    "edad": 8, 
    "foto": 'https://firebasestorage.googleapis.com/v0/b/spotify-8664d.appspot.com/o/natalia-disco.jpg?alt=media&token=ec9a82a8-a553-4b7d-a1f2-f0b9ae41ad84'},

  {'nombre': 'Benji',
    "edad": 9,
    "foto": 'https://firebasestorage.googleapis.com/v0/b/spotify-8664d.appspot.com/o/natalia-disco.jpg?alt=media&token=ec9a82a8-a553-4b7d-a1f2-f0b9ae41ad84'},

]



  constructor() { }

}
