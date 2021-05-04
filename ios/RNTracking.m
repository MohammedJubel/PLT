//
//  Tracking.m
//  PLT
//
//  Created by Mohammed Jubel on 04/05/2021.
//

#import "RNTracking.h"
#import <AppTrackingTransparency/AppTrackingTransparency.h>
#import <React/RCTLog.h>

@implementation RNTracking

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getTrackingStatus:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject)
{
    if (@available(iOS 14, *)) {
        resolve([RNTracking convertTrackingStatusToString:[ATTrackingManager trackingAuthorizationStatus]]);
    } else {
        resolve(@"unavailable");
    }
}


RCT_EXPORT_METHOD(requestTrackingPermission:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject)
{
    if (@available(iOS 14, *)) {
        [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status) {
            resolve([RNTracking convertTrackingStatusToString:status]);
        }];
    } else {
        resolve(@"unavailable");
    }
}

+ (NSString *) convertTrackingStatusToString:(ATTrackingManagerAuthorizationStatus) status API_AVAILABLE(ios(14)) {
    switch (status) {
        case ATTrackingManagerAuthorizationStatusDenied:
            return @"denied";
        case ATTrackingManagerAuthorizationStatusAuthorized:
            return @"authorized";
        case ATTrackingManagerAuthorizationStatusRestricted:
            return @"restricted";
        case ATTrackingManagerAuthorizationStatusNotDetermined:
            return @"not-determined";
    }
}
@end
