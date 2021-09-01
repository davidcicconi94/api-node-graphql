import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Author } from "./author.entities";

@ObjectType()
@Entity()
export class Book {
  @Field()
  @PrimaryGeneratedColumn()
  id!: string;

  @Field()
  @Column()
  title!: number;

  @Field()
  @ManyToOne(() => Author, (author) => author.books)
  author!: Author;

  @Field()
  @CreateDateColumn({ type: "timestamp" })
  createdAt!: string;
}
