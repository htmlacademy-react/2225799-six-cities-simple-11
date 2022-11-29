export const isRatingSet = (rating:number):boolean => rating > 0 && rating <= 5;

export const isCommentCorrect = (comment:string):boolean => comment.length >= 50 && comment.length <= 300;
