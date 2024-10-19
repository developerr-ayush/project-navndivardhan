import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export function JobListing() {
  const jobListings = [
    {
      position: "MEP Manager",
      location: "HQ",
      qualification: "Diploma/B.E (Mechanical)",
      experience: "7 to 12 Years",
      skills: "Plumbing design & site MEP execution",
      department: "Project Management",
    },
    {
      position: "Sales Executive (Sourcing and Closing)",
      location: "Khar, Mulund, Panvel",
      qualification: "Graduate",
      experience: "2 to 10 Years",
      skills: "Experience in Real Estate",
      department: "Sales, Marketing and CRM",
    },
    {
      position: "Junior Engineer",
      location: "Panvel",
      qualification: "Diploma/B.E (Civil)",
      experience: "3 to 06 Years",
      skills: "Site Execution",
      department: "Project Management",
    },
    {
      position: "Senior Engineer",
      location: "Panvel",
      qualification: "Diploma/B.E (Civil)",
      experience: "6 to 12 Years",
      skills: "Site Execution",
      department: "Project Management",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-200">
            <TableHead className="font-bold">Open Position</TableHead>
            <TableHead className="font-bold">Location</TableHead>
            <TableHead className="font-bold">Qualification</TableHead>
            <TableHead className="font-bold">Experience</TableHead>
            <TableHead className="font-bold">Skills</TableHead>
            <TableHead className="font-bold">Department</TableHead>
            <TableHead className="font-bold"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobListings.map((job, index) => (
            <TableRow
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <TableCell className="font-medium">{job.position}</TableCell>
              <TableCell>{job.location}</TableCell>
              <TableCell>{job.qualification}</TableCell>
              <TableCell>{job.experience}</TableCell>
              <TableCell>{job.skills}</TableCell>
              <TableCell>{job.department}</TableCell>
              <TableCell>
                <Button
                  variant="link"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Apply Now
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
