var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Lista de Tarefas API!");


// Get all ToDoItems
app.Run();
