import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.css']
})
export class ListproduitsComponent implements OnInit {
  tab:Produit[]=[];
  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    this.tab=this.produitService.getProduit();
  }

}
