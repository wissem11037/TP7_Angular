import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
      lesCategories: string[]=["info","meubles","Accessoires","Fourniture"];
      produit:Produit =new Produit(0,"",true,"","");
      message :string="Votre nouveau produit a bien été ajouté";
  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    
  }
   ;
  onSubmit(f:NgForm){
    console.log(f.value);
    console.log(f.value["reference"]+" "+f.value.lib+" "+f.controls["madeIn"].value + " " + f.value["categ"] + " " + f.value.nouv);
    this.produitService.addProduit(this.produit);
    
  }
  onReset(f:NgForm){
    f.resetForm({madeIn:"Tunisie",categ:this.lesCategories[3]});
  }


}
