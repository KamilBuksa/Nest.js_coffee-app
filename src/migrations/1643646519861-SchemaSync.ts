import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1643646519861 implements MigrationInterface {
    name = 'SchemaSync1643646519861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "descriptions" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "descriptions"`);
    }

}
