import { Component, OnInit } from "@angular/core";
import { UserService } from "./service/user.service";
import { Employee } from "./interface/employee";
import { HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

import { ApiResponse } from "./interface/api-response";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {

  employees: any = [5, 10, 15,20,30,100];

  selectedRecords:any;

  public totalPages: number;

  public totalElements: number;

  public noOfElementsPerPage:number;

  public curser=false;

  public arrow:boolean;



  responseSubject = new BehaviorSubject<ApiResponse>(null);
  private currentPageSubject = new BehaviorSubject<number>(0);

  currentPage$ = this.currentPageSubject.asObservable();


  sortKeyword: string = 'disable';

  constructor(private service: UserService) {
   
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  employee: Employee[] = [
    {
      id: "",
      name: "",
      email: "",
      mobile_Number: "",
      domine: "",
      salary: 0,
      address: "",
    },
  ];

  keyword: string = "";
  pageNo: number = 0;
  pageSize: number = 10;
  sortBy: string = "id";
  sortDir: string = "asc";

  getAllEmployees() {
    this.service
      .getAllEmployees(
        this.keyword,
        this.pageNo,
        this.pageSize,
        this.sortBy,
        this.sortDir
      )
      .subscribe(
        (res) => {
          this.responseSubject.next(res);
          this.currentPageSubject.next(res.pageable.pageNumber);
          //console.log(res);
          this.employee = res.content;
          this.totalPages = res.totalPages;

          this.totalElements = res.totalElements;
          this.noOfElementsPerPage=res.numberOfElements;
          // console.log(res.content);
          // console.log(res.pageable);
          // console.log(res.sort);
          // console.log(res.totalElements);
          // console.log(res.totalPages);
        },
        (error) => {
           //console.log(error);
          alert("unable to load employee details");         
        }
      );
  }
  gotToPage(name?: string, pageNumber: number=0,pageSize:number=10): void {

    this.service
      .getAllEmployees(
        name,
      this.pageNo=pageNumber,
        this.pageSize=pageSize,
        this.sortBy,
        this.sortDir
      )
      .subscribe(
        (res) => {
          
          this.employee = res.content;
          this.responseSubject.next(res);
          this.currentPageSubject.next(pageNumber);
          this.totalPages = res.totalPages;
          this.totalElements = res.totalElements;
          this.noOfElementsPerPage=res.numberOfElements;
         // console.log(res);
        },
        (error) => {
         // console.log(error);
          alert("unable to load next page");
        }
      );
  }

  goToNextOrPreviousPage(direction?: string, name?: string): void {
    this.gotToPage(
      name,
      direction === "forward"
        ? this.currentPageSubject.value + 1
        : this.currentPageSubject.value - 1
    );
  }

  sortEmployees(sortBy:string,sortDir:string){

 this.service.getAllEmployees(this.keyword,this.pageNo,this.pageSize,this.sortBy=sortBy,this.sortDir=sortDir).subscribe(
  res=>{

    this.employee=res.content;
    //console.log(res);
  },
  error=>{
   // console.log(error);
    alert("unable to sort the data");
  }
 )
  }



  
  public downArrow:boolean=false;

  OnClick(sortBy:string,sortDir:string){

    this. sortEmployees(sortBy,sortDir)
    this.downArrow=false;
    this.arrow=true;
  }

  DbClick(sortBy:string,sortDir:string){
    this. sortEmployees(sortBy,sortDir)
    this.arrow=false;
    this.downArrow=true;

  }

  idSort(type:string){
debugger
    if(type==='id'){
      if(this.sortKeyword==='disable'){
        this.sortEmployees(type,'asc');
        this.sortKeyword='asc';
      } else if(this.sortKeyword==='asc'){
        this.sortEmployees(type,'desc');
        this.sortKeyword='desc';
      } else if(this.sortKeyword==='desc'){
        this.sortEmployees(type,'');
        this.sortKeyword='disable';
      }
    }
    else if(type==='name'){

      if(this.sortKeyword==='disable'){
        this.sortEmployees(type,'asc');
        this.sortKeyword='asc';
      } else if(this.sortKeyword==='asc'){
        this.sortEmployees(type,'desc');
        this.sortKeyword='desc';
      } else if(this.sortKeyword==='desc'){
        this.sortEmployees(type,'');
        this.sortKeyword='disable';
      }

    }
    else if(type==='email'){

      if(this.sortKeyword==='disable'){
        this.sortEmployees(type,'asc');
        this.sortKeyword='asc';
      } else if(this.sortKeyword==='asc'){
        this.sortEmployees(type,'desc');
        this.sortKeyword='desc';
      } else if(this.sortKeyword==='desc'){
        this.sortEmployees(type,'');
        this.sortKeyword='disable';
      }
    }
    else if(type==='mobile_Number'){

      if(this.sortKeyword==='disable'){
        this.sortEmployees(type,'asc');
        this.sortKeyword='asc';
      } else if(this.sortKeyword==='asc'){
        this.sortEmployees(type,'desc');
        this.sortKeyword='desc';
      } else if(this.sortKeyword==='desc'){
        this.sortEmployees(type,'');
        this.sortKeyword='disable';
      }

    }
    else if(type==='domine'){

      if(this.sortKeyword==='disable'){
        this.sortEmployees(type,'asc');
        this.sortKeyword='asc';
      } else if(this.sortKeyword==='asc'){
        this.sortEmployees(type,'desc');
        this.sortKeyword='desc';
      } else if(this.sortKeyword==='desc'){
        this.sortEmployees(type,'');
        this.sortKeyword='disable';
      }

    }

    else if(type==='salary'){

      if(this.sortKeyword==='disable'){
        this.sortEmployees(type,'asc');
        this.sortKeyword='asc';
      } else if(this.sortKeyword==='asc'){
        this.sortEmployees(type,'desc');
        this.sortKeyword='desc';
      } else if(this.sortKeyword==='desc'){
        this.sortEmployees(type,'');
        this.sortKeyword='disable';
      }

    }

    else if(type==='address'){

      if(this.sortKeyword==='disable'){
        this.sortEmployees(type,'asc');
        this.sortKeyword='asc';
      } else if(this.sortKeyword==='asc'){
        this.sortEmployees(type,'desc');
        this.sortKeyword='desc';
      } else if(this.sortKeyword==='desc'){
        this.sortEmployees(type,'');
        this.sortKeyword='disable';
      }

    }

    // this. sortEmployees(sortBy,sortDir)
    // this.downArrow=false;
    // this.arrow=true;
  }
 

 
}
