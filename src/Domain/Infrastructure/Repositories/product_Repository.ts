import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";
import { Generic_Repository } from "../Base/generic_Repository";
import { Product_Orm } from "../Database/Orm/product_Orm";
import { Product } from "../../Entity/product";

@Injectable()
@EntityRepository(Product_Orm)
export class Product_Repository extends Generic_Repository<Product_Orm> {

  public map_Orm_To_Entity(orm: Product_Orm): Product {

    const product: Product = new Product();

    product._id = orm._id;
    product.code = orm.code;
    product.type = orm.type;
    product.price = orm.price;
    product.brand = orm.brand;

    return product;

  }

  public static map_Entity_To_Orm(entity: Product): Product_Orm {

    const orm: Product_Orm = new Product_Orm();
    orm._id = entity._id;
    orm.code = entity.code;
    orm.type = entity.type;
    orm.price = entity.price;
    orm.brand = entity.brand;

    return orm;

  }

}