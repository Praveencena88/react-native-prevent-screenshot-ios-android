//
//  UIImage+ImageEffects.h

//  Created by Praveen Kumar on 19/07/23.
//

#ifndef UIImage_ImageEffects_h
#define UIImage_ImageEffects_h

#import <UIKit/UIKit.h>

@interface UIImage (ImageEffects)

- (UIImage *)applyLightEffect;
- (UIImage *)applyExtraLightEffect;
- (UIImage *)applyDarkEffect;
- (UIImage *)applyTintEffectWithColor:(UIColor *)tintColor;

- (UIImage *)applyBlurWithRadius:(CGFloat)blurRadius tintColor:(UIColor *)tintColor saturationDeltaFactor:(CGFloat)saturationDeltaFactor maskImage:(UIImage *)maskImage;

- (UIImage *)rotateByDegrees:(CGFloat)degrees;

+ (UIImage *)imagePixelFromColor:(UIColor *)color;
+ (UIImage *)imageFromColor:(UIColor *)color withSize:(CGSize)size;

@end

#endif /* UIImage_ImageEffects_h */
