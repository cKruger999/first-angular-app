import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  username: string = 'Christo';
  balance: number = 5000;
  monthlyIncome: number = 12000;
  monthlyExpenses: number = 7000;
  monthlyBudget: number = 9000;
  savings: number = 2500;
  currency: string = 'ZAR';
  calculateBalance(income: number, expenses: number): number {
    return income - expenses;
  }
  calculateBudgetRemaining(budget: number, expenses: number): number {
    return budget - expenses;
  }
  calculateSavingsPercentage(income: number, expenses: number): number {
    const savings = income - expenses;
    return (savings / income) * 100;
  }
}

