using System.Collections.Generic;

namespace IstanbulEventz.Models.ViewModels
{
    public class ContactUsViewModel
    {
        public string ContactTitle { get; set; }
        public string ContactSubtitle { get; set; }
        public IEnumerable<OfficeViewModel> Offices { get; set; }
    }

    public class OfficeViewModel
    {
        public string OfficeName { get; set; }
        public string OfficeAddress { get; set; }
        public string PhoneNumber { get; set; }
    }
}