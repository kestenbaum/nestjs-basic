import { Controller, Get, Injectable, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Injectable()
class AppService {
    generateMessage () {
        return "Hello"
    }
}


@Controller()
class AppController {
    constructor(private readonly appService: AppService) {}
    @Get("/")
    sayHello () {
        return this.appService.generateMessage();
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