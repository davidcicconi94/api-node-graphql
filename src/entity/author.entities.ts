import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Book } from "./book.entities";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Author {
  @Field()
  @PrimaryGeneratedColumn()
  id!: string;

  @Field(() => String)
  @Column()
  fullName!: number;

  @Field({ nullable: true })
  @OneToMany(() => Book, (book) => book.author, { nullable: true })
  books!: Book;

  @Field(() => String)
  @CreateDateColumn({ type: "timestamp" })
  createdAt!: string;
}
