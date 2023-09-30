// Rest API Contact Controller

using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ToDoAPI.Models;

namespace ToDoAPI.Controllers
{
    public class ToDoDb : ControllerBase
    {
        // Create a list of ToDoItems
        private static List<ToDoItem> _todoitems = new List<ToDoItem>
        {
            new ToDoItem { Id = 1, Name = "Estudar C#", DueDate = "2021-10-01" },
            new ToDoItem { Id = 2, Name = "Estudar ASP.NET Core", DueDate = "2021-10-01" },
            new ToDoItem { Id = 3, Name = "Estudar React", DueDate = "2021-10-01" }
        };

        // Create a static variable to hold the next id
        private static int _nextId = 4;

        // Get next id
        private static int GetNextId()
        {
            return _nextId++;
        }

        // To do item constructor with id
        private static ToDoItem CreateToDoItem(string name, string dueDate)
        {
            return new ToDoItem
            {
                Id = GetNextId(),
                Name = name,
                DueDate = dueDate
            };
        }

        // Add a new ToDoItem
        public static void AddToDoItem(string name, string dueDate)
        {
            _todoitems.Add(CreateToDoItem(name, dueDate));
        }

        // Get all ToDoItems
        public static List<ToDoItem> GetToDoItems()
        {
            return _todoitems;
        }

        // Get a single ToDoItem by Id
        public static ToDoItem GetToDoItem(int id)
        {
            return _todoitems.Where(todoitem => todoitem.Id == id).SingleOrDefault();
        }

        // Get all dates that have ToDoItems
        public static List<string> GetToDoItemDates()
        {
            return _todoitems.Select(todoitem => todoitem.DueDate).Distinct().ToList();
        }

        // Get all ToDoItems for a specific date
        public static List<ToDoItem> GetToDoItemsByDate(string date)
        {
            return _todoitems.Where(todoitem => todoitem.DueDate == date).ToList();
        }

        // Delete a ToDoItem
        public static void DeleteToDoItem(int id)
        {
            _todoitems.RemoveAll(todoitem => todoitem.Id == id);
        }

        // Update a ToDoItem
        public static void UpdateToDoItem(ToDoItem todoitem)
        {
            var index = _todoitems.FindIndex(existingToDoItem => existingToDoItem.Id == todoitem.Id);
            _todoitems[index] = todoitem;
        }
    }

    [ApiController]
    [Route("[todo]")]
    public class ToDoController : ControllerBase
    {
        // Get all ToDoItems
        [HttpGet]
        public List<ToDoItem> GetToDoItems()
        {
            return ToDoDb.GetToDoItems();
        }

        // Get a single ToDoItem by Id
        [HttpGet("{id}")]
        public ToDoItem GetToDoItem(int id)
        {
            return ToDoDb.GetToDoItem(id);
        }

        // Get all dates that have ToDoItems
        [HttpGet("dates")]
        public List<string> GetToDoItemDates()
        {
            return ToDoDb.GetToDoItemDates();
        }

        // Get all ToDoItems for a specific date
        [HttpGet("dates/{date}")]
        public List<ToDoItem> GetToDoItemsByDate(string date)
        {
            return ToDoDb.GetToDoItemsByDate(date);
        }

        // Add a new ToDoItem
        [HttpPost]
        public void AddToDoItem(string name, string dueDate)
        {
            ToDoDb.AddToDoItem(name, dueDate);
        }

        // Update a ToDoItem
        [HttpPut]
        public void UpdateToDoItem(string name, string dueDate, int id)
        {
            var todoitem = new ToDoItem
            {
                Id = id,
                Name = name,
                DueDate = dueDate
            };
            ToDoDb.UpdateToDoItem(todoitem);
        }
        
        // Delete a ToDoItem
        [HttpDelete("{id}")]
        public void DeleteToDoItem(int id)
        {
            ToDoDb.DeleteToDoItem(id);
        }


    }

}
