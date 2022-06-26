import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Post from './post';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Post, post => post.userId)
  post: Post[];
}
