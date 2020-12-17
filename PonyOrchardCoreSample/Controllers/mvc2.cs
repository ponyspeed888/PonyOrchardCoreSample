using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PonyOrchardCoreSample.Controllers
{
    public class mvc2 : Controller
    {
        // GET: mvc2
        public ActionResult Index()
        {
            return Content("this is mvc 2 controller");
        }

        // GET: mvc2/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: mvc2/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: mvc2/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: mvc2/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: mvc2/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: mvc2/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: mvc2/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
