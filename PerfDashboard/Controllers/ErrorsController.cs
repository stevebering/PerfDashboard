using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace PerfDashboard.Controllers
{
    public class ErrorsController : ApiController
    {
        public IEnumerable<int> Get()
        {
            var numbers = new List<int>();
            for (int i = 80; i <= 250; i++)
            {
                numbers.Add(i);
            }
            var output = Shuffle(numbers);
            return output.Take(9);
        }

        private IEnumerable<T> Shuffle<T>(IList<T> list)
        {
            var random = new Random();
            int index = list.Count();
            while (index > 1)
            {
                index--;
                int lookup = random.Next(index + 1);
                T value = list[lookup];
                list[lookup] = list[index];
                list[index] = value;
            }

            return list;
        }
    }
}
