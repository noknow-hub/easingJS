//////////////////////////////////////////////////////////////////////
// easing.js
//
// @usage
//     1. Include this js in your head element.
// 
//         //////////////////////////////////////////////////
//         <head>
//           <script type="text/javascript" src="easing.js"></script>
//         </head>
//         //////////////////////////////////////////////////
//
//     2. Just use these static functions.
//
//         //////////////////////////////////////////////////
//         let time = 0;
//         const begin = 0;
//         const change = 500;
//         const duration = 1000;
//         
//         Linear: Easing.Linear(time, begin, change, duration);
//         Ease In Out Quadratic: Easing.EaseInOutQuad(time, begin, change, duration);
//         //////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////
// Class
//////////////////////////////////////////////////
class Easing {
    
    //////////////////////////////////////////////////
    // Linear
    // @param t: current time
    // @param b: begin position
    // @param c: change from end to begin position
    // @param d: duration
    //////////////////////////////////////////////////
    static Linear(t, b, c, d) {
        return c * t / d + b;
    }
    
    
    //////////////////////////////////////////////////
    // Ease In Quadratic
    // @param t: current time
    // @param b: begin position
    // @param c: change from end to begin position
    // @param d: duration
    //////////////////////////////////////////////////
    static EaseInQuad(t, b, c, d) {
        t /= d;
        return c * t * t + b;
    }
    
    
    //////////////////////////////////////////////////
    // Ease Out Quadratic
    // @param t: current time
    // @param b: begin position
    // @param c: change from end to begin position
    // @param d: duration
    //////////////////////////////////////////////////
    static EaseOutQuad(t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
    }
    
    
    //////////////////////////////////////////////////
    // Ease In Out Quadratic
    // @param t: current time
    // @param b: begin position
    // @param c: change from end to begin position
    // @param d: duration
    //////////////////////////////////////////////////
    static EaseInOutQuad(t, b, c, d) {
        t /= d / 2;
        if(t < 1) {
            return c / 2 * t * t + b;
        }
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    
    //////////////////////////////////////////////////
    // Ease In Cubic
    // @param t: current time
    // @param b: begin position
    // @param c: change from end to begin position
    // @param d: duration
    //////////////////////////////////////////////////
    static EaseInCubic(t, b, c, d) {
        t /= d;
        return c * t * t * t + b;
    }
    
    
    //////////////////////////////////////////////////
    // Ease Out Cubic
    // @param t: current time
    // @param b: begin position
    // @param c: change from end to begin position
    // @param d: duration
    //////////////////////////////////////////////////
    static EaseOutCubic(t, b, c, d) {
        t /= d;
        t--;
        return c * (t * t * t + 1) + b;
    }
    
    
    //////////////////////////////////////////////////
    // Ease In Out Cubic
    // @param t: current time
    // @param b: begin position
    // @param c: change from end to begin position
    // @param d: duration
    //////////////////////////////////////////////////
    static EaseInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) {
            return c / 2 * t * t * t + b;
        }
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
    
    
    //////////////////////////////////////////////////
    // Ease In Exponential
    // @param t: current time
    // @param b: begin position
    // @param c: change from end to begin position
    // @param d: duration
    //////////////////////////////////////////////////
    static EaseInExpo(t, b, c, d) {
        return c * Math.pow(2, 10 * (t / d - 1)) + b;
    }
    
    
    //////////////////////////////////////////////////
    // Ease Out Exponential
    // @param t: current time
    // @param b: begin position
    // @param c: change from end to begin position
    // @param d: duration
    //////////////////////////////////////////////////
    static EaseOutExpo(t, b, c, d) {
        return c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }
    
    
    //////////////////////////////////////////////////
    // Ease In Out Exponential
    // @param t: current time
    // @param b: begin position
    // @param c: change from end to begin position
    // @param d: duration
    //////////////////////////////////////////////////
    static EaseInOutExpo(t, b, c, d) {
        t /= d / 2;
        if (t < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }
        t--;
        return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
    }
    
}    
