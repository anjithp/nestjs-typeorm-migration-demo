import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameColInArticleTable1586679296944 implements MigrationInterface {
    name = 'RenameColInArticleTable1586679296944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" RENAME COLUMN "title" TO "name"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" RENAME COLUMN "name" TO "title"`, undefined);
    }

}
