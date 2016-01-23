angular.module('calendarDemoApp', [])

// your controller and directive code go here
.controller('calendarController', [ '$scope', function($scope){
	

}]).directive('calendar', function() {
    return {
        restrict: 'E',
        templateUrl: 'calendar-template.html',
        scope: true,
        link: function(scope, element, attrs) {
            scope.currentYear = new Date().getFullYear();
			scope.currentMonth = new Date().getMonth();
			scope.selectedYear = scope.currentYear;
			scope.selectedMonth = scope.currentMonth;
			scope.setCalendar = function(){
				var date = new Date(scope.selectedYear, scope.selectedMonth);
				var range = CalendarRange.getMonthlyRange(date);
				scope.weeks = range.days.length / 7;
				scope.days = range.days;
			};
			scope.setCalendar();
			scope.years = [];

			var startingYear = scope.currentYear - 20,
				endingYear = scope.currentYear + 20;

			for (var i = startingYear; i <= endingYear; i++) {
				scope.years.push(i);
			}
        }
    };
});