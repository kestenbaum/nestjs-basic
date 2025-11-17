import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
    @Get("/")
    sayHello () {
        return "Hello"
    }
}

@Module({
    controllers: [AppController]
})

class AppModel {}

async function bootstrap () {
    const app = await NestFactory.create(AppModel);
    await app.listen(3232);
    console.log("Server running")
}

bootstrap()